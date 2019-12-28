import React from "react";
import { GameDto } from "../Dtos/GameDto";
import { useGameContext } from "../hooks/useGameContext";
import api from "../services/api";
import useRouter from "use-react-router";
import styled from "styled-components";

export const Home = () => {
    const { iniciateGame } = useGameContext();
    const { history } = useRouter();

    async function onCreateGame() {
        const result = await api.post("/");
        const data = result.data as GameDto;

        iniciateGame(data.id, data.firstPlayer);

        history.push("/jogo");
    }

    return (
        <Container>
            <h1>Jogo da velha</h1>
            <button onClick={onCreateGame}>Novo jogo</button>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
        text-align: center;
        padding: 40px 0;
        color: #3e3990;
        font-size: 45px;
        text-transform: uppercase;
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
