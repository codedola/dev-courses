import React from "react";
import DashboardTopic from "./DashboardTopic";
import DashboardManager from "./Dashboard.Manager";
import { Switch, Route, useRouteMatch } from "react-router-dom";
export default function DashboardContent() {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <DashboardManager />
            </Route>
            <Route path={`${path}/:topicTitle`}>
                <DashboardTopic />
            </Route>
        </Switch>
    );
}
