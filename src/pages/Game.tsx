import React from "react";
import styled from "styled-components";
import { Board } from "../components/Board";
import { useGameContext } from "../hooks/useGameContext";

export const Game = () => {
    const { gameState } = useGameContext();

    return (
        <div>
            <H1>Tabuleiro</H1>
            <StatusBar>
                <span>Jogador atual: {gameState.currentPlayer.toUpperCase()}</span>
            </StatusBar>
            <Board />
        </div>
    );
};

const H1 = styled.h1`
    text-align: center;
    padding: 40px 0;
    color: #3e3990;
    font-size: 45px;
    text-transform: uppercase;
`;

const StatusBar = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 150px;
    padding: 10px 0;
`;
