import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GameContextProvider } from "./contexts/GameContext";
import { GlobalStyle } from "./GlobalStyle";
import { Game } from "./pages/Game";
import { GameStatus } from "./pages/GameStatus";
import { Home } from "./pages/Home";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <GameContextProvider>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/jogo" component={Game} />
                        <Route path="/fimDeJogo" component={GameStatus} />
                    </Switch>
                </GameContextProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
