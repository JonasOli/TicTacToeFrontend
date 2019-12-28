import React, { useEffect } from "react";
import styled from "styled-components";
import useRouter from "use-react-router";
import { GameDto } from "../Dtos/GameDto";
import { useGameContext } from "../hooks/useGameContext";
import api from "../services/api";

export const GameStatus = () => {
    const { gameState, iniciateGame } = useGameContext();
    const { history } = useRouter();

    useEffect(() => {
        if (!gameState.id) history.push("/");
    });

    async function onCreateGame() {
        const result = await api.post("/");
        const data = result.data as GameDto;

        iniciateGame(data.id, data.firstPlayer);

        history.push("/jogo");
    }

    return (
        <Container>
            {gameState.winner !== "Draw" ? (
                <>
                    <h1>Vencedor: {gameState.winner.toUpperCase()}</h1>
                    <img
                        src="/winner.gif"
                        alt=""
                    />
                </>
            ) : (
                <h1>Deu velha :(</h1>
            )}
            <button onClick={onCreateGame}>Novo jogo</button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;

    h1 {
        text-align: center;
        padding: 20px 0;
    }

    img {
        margin-bottom: 30px;
    }

    button {
        margin: auto;
        width: 150px;
        padding: 20px;
        background: #2ec32e;
        border: 0;
        border-radius: 5px;
        color: #fff;
        font-size: 17px;
        font-weight: 700;
        cursor: pointer;
    }
`;
