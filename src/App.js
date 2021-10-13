import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    ContainerApp,
    WapperApp,
    ContentApp,
} from "./components/Styled/App.Styled";
import LoadingPage from "./components/LoadingPage";
import { actGetListCategoriesAsync } from "./store/category/actions";
import { actGetListCourseAllAsync } from "./store/course/actions";
import { actGetCategoriesUserAsync } from "./store/user/actions";
import { actCheckLoginAsync } from "./store/auth/actions";
import Homepage from "./pages/Homepage";
import HeaderApp from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchCourse from "./pages/SearchCourse";
import Dashboard from "./pages/Dashboard";
import CategoriesCourse from "./pages/CategoriesCourse";

function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(
        function () {
            dispatch(actCheckLoginAsync());
        },
        [dispatch]
    );

    useEffect(
        function () {
            async function runPromiseAll() {
                setLoading(true);
                await dispatch(actGetListCategoriesAsync());
                await dispatch(actGetListCourseAllAsync());
                await dispatch(actGetCategoriesUserAsync());
                setLoading(false);
            }
            runPromiseAll();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return (
        <WapperApp>
            <ContainerApp>
                <HeaderApp />
                
              
                <ContentApp>
                   
                    <Switch>
                         <Route path='/categories/:category' exact>
                            <CategoriesCourse />
                        </Route>
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
                <Switch>
                    <Route path='/dashboard'>
                        <Dashboard />
                    </Route>
                </Switch>
            </ContainerApp>
            <LoadingPage isLoading={loading} />
        </WapperApp>
    );
}

export default App;
