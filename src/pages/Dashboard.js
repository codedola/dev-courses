import React, { useEffect } from "react";
import { Row, Col } from "antd";
import DashboardMenu from "../components/Dashboard/Dashboard.Menu";
import DashboardContent from "../components/Dashboard/Dashboard.Content";
import { useDispatch } from "react-redux";
import useAuth from "../utilities/hook/useAuth";
import { actGetUserPagingAsync } from "../store/user/actions";
export default function Dashboard() {
    useAuth();
    const dispatch = useDispatch();

    useEffect(
        function () {
            dispatch(actGetUserPagingAsync());
        },
        [dispatch]
    );
    return (
        <Row style={{ height: "100%" }}>
            <Col md={4} xs={24}>
                <DashboardMenu />
            </Col>
            <Col md={20} xs={24}>
                <DashboardContent />
            </Col>
        </Row>
    );
}
