import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import DashboardMenu from "../components/Dashboard/Dashboard.Menu";
import DashboardContent from "../components/Dashboard/Dashboard.Content";
import { useDispatch } from "react-redux";
import useAuth from "../utilities/hook/useAuth";
import {
    actGetUserPagingAsync,
    actGetAllUserAsync,
} from "../store/user/actions";
import LoadingPage from "../components/LoadingPage";
export default function Dashboard() {
    useAuth();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(
        function () {
            setLoading(true);
            async function runAll() {
                await dispatch(actGetUserPagingAsync());
                await dispatch(actGetAllUserAsync());
                setLoading(false);
            }

            runAll();
        },
        [dispatch]
    );
    return (
        <>
            <Row style={{ height: "100%" }}>
                <Col md={4} xs={24}>
                    <DashboardMenu />
                </Col>
                <Col md={20} xs={24}>
                    <DashboardContent />
                </Col>
            </Row>
            <LoadingPage isLoading={loading} />
        </>
    );
}
