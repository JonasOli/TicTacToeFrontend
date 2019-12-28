import { GameState } from "./GameState";
import { GameStatus } from "../Enums/GameStatus";

export interface IGameContext {
    gameState: GameState;
    iniciateGame: (id: string, firstPlayer: string) => any;
    updateGame: (
        positionX: number,
        positionY: number,
        status: GameStatus,
        winner: string
    ) => any;
}
