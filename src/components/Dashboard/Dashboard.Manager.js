import React, { useState } from "react";
import { Row, Col } from "antd";
import ManagerUsers from "./ManagerUsers";
import ManagerCourse from "./ManagerCourse";
import CourseCreation from "../CourseCreation";
import ManagerCategories from "./ManagerCategories";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import {
    RowManagerCategoryUser,
    ColManagerCourse,
} from "../Styled/Dashboard.Styled";
import CourseUpload from "../CourseUpload";
export default function DashboardManager() {
    let { path } = useRouteMatch();
    const [containerAffix, setContainerAffix] = useState(null);
    return (
        <div style={{ padding: "0px 20px" }}>
            <Row gutter={[16, 16]} >
                <ColManagerCourse span={16}>
                    <Switch>
                        <Route exact path={path}>
                            <ManagerCourse />
                        </Route>
                        <Route path={`${path}/course-creation`} exact>
                            <CourseCreation />
                        </Route>
                         <Route path={`${path}/course-upload`} exact>
                            <CourseUpload />
                        </Route>
                    </Switch>
                </ColManagerCourse>
                {/* Sidebar */}
                <Col span={8}>
                    <RowManagerCategoryUser
                        gutter={[0, 16]}
                        ref={setContainerAffix}   
                    >
                        <Col span={24}>
                            <ManagerCategories />
                        </Col>

                        <Col span={24}>
                            <ManagerUsers containerAffix={containerAffix} />
                        </Col>
                    </RowManagerCategoryUser>
                   
                </Col>
            </Row>
        </div>
    );
}
