import React from "react";
import { Col } from "antd";
import RegisterForm from "../components/RegisterForm";

import {
    SpacingStyled,
    LoginStyled,
    RowLoginStyled,
} from "../components/StyledComponent/Login.Styled";

export default function Register() {
    return (
        <LoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
            <RowLoginStyled justify='center'>
                <Col xs={24} md={12} lg={10}>
                    <RegisterForm />
                </Col>
            </RowLoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
        </LoginStyled>
    );
}
