import React, { useEffect } from "react";
import styled from "styled-components";
import useRouter from "use-react-router";
import { useGameContext } from "../hooks/useGameContext";
import api from "../services/api";
import { GameStatus } from "../Enums/GameStatus";

export const Board = () => {
    const { gameState, updateGame } = useGameContext();
    const { history } = useRouter();

    useEffect(() => {
        if (!gameState.id) history.push("/");
    });

    useEffect(() => {
        if (gameState.status === GameStatus.FinishedMatch) {
            history.push("/fimDeJogo");
        }
    }, [gameState.status, history]);

    async function makeAMove({ x, y }: any) {
        const result = await api.post(`/${gameState.id}/movement`, {
            player: gameState.currentPlayer,
            position: { x, y },
        });

        if (result.status === 200) {
            updateGame(x, y, result.data.status, result.data.winner);
        }
    }

    return (
        <Container style={{ width: "100%", height: "100%" }}>
            <Table>
                <button
                    onClick={() => {
                        makeAMove({ x: 0, y: 0 });
                    }}
                >
                    {gameState.table[0][0]}
                </button>
                <button
                    onClick={() => {
                        makeAMove({ x: 0, y: 1 });
                    }}
                >
                    {gameState.table[0][1]}
                </button>
                <button
                    onClick={() => {
                        makeAMove({ x: 0, y: 2 });
                    }}
                >
                    {gameState.table[0][2]}
                </button>
                <button
                    onClick={() => {
                        makeAMove({ x: 1, y: 0 });
                    }}
                >
                    {gameState.table[1][0]}
                </button>
                <button
                    onClick={() => {
                        makeAMove({ x: 1, y: 1 });
                    }}
                >
                    {gameState.table[1][1]}
                </button>
                <button
                    onClick={() => {
                        makeAMove({ x: 1, y: 2 });
                    }}
                >
                    {gameState.table[1][2]}
                </button>
                <button
                    onClick={() => {
                        makeAMove({ x: 2, y: 0 });
                    }}
                >
                    {gameState.table[2][0]}
                </button>
                <button
                    onClick={() => {
                        makeAMove({ x: 2, y: 1 });
                    }}
                >
                    {gameState.table[2][1]}
                </button>
                <button
                    onClick={() => {
                        makeAMove({ x: 2, y: 2 });
                    }}
                >
                    {gameState.table[2][2]}
                </button>
            </Table>
        </Container>
    );
};

const Container = styled.div`
    background: greenyellow;
    padding: 10px 0;
`;

const Table = styled.div`
    background: black;
    width: 306px;
    margin: auto;
    display: grid;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(3, 100px);
    justify-content: center;
    align-content: center;
    grid-row-gap: 3px;
    grid-column-gap: 3px;

    button {
        font-size: 60px;
        border: 0;
        background: greenyellow;
    }
`;
