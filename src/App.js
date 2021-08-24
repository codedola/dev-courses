import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    ContainerApp,
    WapperApp,
} from "./components/StyledComponent/App.Styled";

import { actGetListCategoriesAsync } from "./store/category/actions";
import Homepage from "./pages/Homepage";
import HeaderApp from "./components/Header";

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

                <Switch>
                    <Route path='/' exact>
                        <Homepage />
                    </Route>
                </Switch>
            </ContainerApp>
        </WapperApp>
    );
}

export default App;
