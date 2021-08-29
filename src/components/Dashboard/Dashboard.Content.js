import React from "react";
import DashboardTopic from "./DashboardTopic";
import { Switch, Route, useRouteMatch } from "react-router-dom";
export default function DashboardContent() {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <h1>XUẤT HIỆN KHI VÀO TRANG DashBoard</h1>
            </Route>
            <Route path={`${path}/:topicTitle`}>
                <DashboardTopic />
            </Route>
        </Switch>
    );
}
