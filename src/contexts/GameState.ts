import { GameStatus } from "../Enums/GameStatus";

export class GameState {
    constructor(
        public id = "",
        public currentPlayer = "",
        public table = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ],
        public status = GameStatus.OnGoingMatch,
        public winner = ""
    ) {}

    iniciateGame(id: string, firstPlayer: string) {
        this.id = id;
        this.currentPlayer = firstPlayer;

        return this.clone();
    }

    updateGame(
        positionX: number,
        positionY: number,
        status: GameStatus,
        winner: string
    ) {
        this.table[positionX][positionY] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
        this.status = status;
        this.winner = winner;

        return this.clone();
    }

    private clone() {
        return new GameState(
            this.id,
            this.currentPlayer,
            this.table,
            this.status,
            this.winner
        );
    }
}
