import React, { createContext, useState } from "react";
import { GameStatus } from "../Enums/GameStatus";
import { GameState } from "./GameState";

// @ts-ignore
export const GameContext = createContext();

export const GameContextProvider = ({ children }: any) => {
    const [gameState, setGameState] = useState(new GameState());

    return (
        <GameContext.Provider
            value={{
                gameState,
                iniciateGame: (id: string, firstPlayer: string) => {
                    setGameState(new GameState(id, firstPlayer));
                },
                updateGame: (
                    positionX: number,
                    positionY: number,
                    status: GameStatus,
                    winner: string
                ) => {
                    setGameState(
                        gameState.updateGame(
                            positionX,
                            positionY,
                            status,
                            winner
                        )
                    );
                },
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
