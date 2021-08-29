import React from "react";
import { Row, Col } from "antd";
import ManagerUsers from "./ManagerUsers";
import ManagerCourse from "./ManagerCourse";
import ManagerCategories from "./ManagerCategories";
import { RowManagerCategoryUser } from "../Styled/Dashboard.Styled";
export default function DashboardManager() {
    return (
        <div style={{ padding: "0px 20px" }}>
            <Row>
                <Col span={16}>
                    <ManagerCourse />
                </Col>
                <Col span={8}>
                    <RowManagerCategoryUser gutter={[0, 16]}>
                        <Col span={24}>
                            <ManagerCategories />
                        </Col>

                        <Col span={24}>
                            <ManagerUsers />
                        </Col>
                    </RowManagerCategoryUser>
                </Col>
            </Row>
        </div>
    );
}
