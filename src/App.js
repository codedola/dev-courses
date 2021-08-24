import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    ContainerApp,
    WapperApp,
    ContentApp,
} from "./components/StyledComponent/App.Styled";

import { actGetListCategoriesAsync } from "./store/category/actions";
import Homepage from "./pages/Homepage";
import HeaderApp from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    const dispatch = useDispatch();

    useEffect(
        function () {
            dispatch(actGetListCategoriesAsync());
        },
        [dispatch]
    );
    return (
        <WapperApp>
            <ContainerApp>
                <HeaderApp />
                <ContentApp>
                    <Switch>
                        <Route path='/register' exact>
                            <Register />
                        </Route>
                        <Route path='/login' exact>
                            <Login />
                        </Route>
                        <Route path='/' exact>
                            <Homepage />
                        </Route>
                    </Switch>
                </ContentApp>
            </ContainerApp>
        </WapperApp>
    );
}

export default App;
