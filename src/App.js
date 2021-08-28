import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    ContainerApp,
    WapperApp,
    ContentApp,
} from "./components/Styled/App.Styled";

import { actGetListCategoriesAsync } from "./store/category/actions";
import { actGetListCourseAllAsync } from "./store/course/actions";
import {} from "./store/course/actions";
import { actCheckLoginAsync } from "./store/auth/actions";
import Homepage from "./pages/Homepage";
import HeaderApp from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchCourse from "./pages/SearchCourse";

function App() {
    const dispatch = useDispatch();

    useEffect(
        function () {
            dispatch(actCheckLoginAsync());
        },
        [dispatch]
    );

    useEffect(
        function () {
            async function runPromiseAll() {
                await Promise.all([
                    dispatch(actGetListCategoriesAsync()),
                    dispatch(actGetListCourseAllAsync()),
                ]);
            }
            runPromiseAll();
        },
        [dispatch]
    );
    return (
        <WapperApp>
            <ContainerApp>
                <HeaderApp />
                <ContentApp>
                    <Switch>
                        <Route path='/search' exact>
                            <SearchCourse />
                        </Route>
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
