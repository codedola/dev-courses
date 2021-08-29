import React from "react";
import { Row, Col } from "antd";
import DashboardMenu from "../components/Dashboard/Dashboard.Menu";
import DashboardContent from "../components/Dashboard/Dashboard.Content";
// import { useSelector, useDispatch } from "react-redux";
import useAuth from "../utilities/hook/useAuth";
// import { actLogout } from "../store/auth/actions";

export default function Dashboard() {
    useAuth();
    // const dispatch = useDispatch();

    // const [visibleForm, setVisibleForm] = useState(false);

    return (
        <Row>
            <Col md={4} xs={24}>
                <DashboardMenu />
            </Col>
            <Col md={20} xs={24}>
                <DashboardContent />
            </Col>
        </Row>
    );
}
