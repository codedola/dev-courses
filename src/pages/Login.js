import React from "react";
import { Col } from "antd";
import LoginForm from "../components/LoginForm";
import {
    SpacingStyled,
    LoginStyled,
    RowLoginStyled,
} from "../components/StyledComponent/Login.Styled";
export default function Login() {
    return (
        <LoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
            <RowLoginStyled justify='center'>
                <Col xs={24} md={12} lg={10}>
                    <LoginForm />
                </Col>
            </RowLoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
        </LoginStyled>
    );
}
