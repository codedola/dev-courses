import React from "react";
import { Col } from "antd";
import RegisterForm from "../components/RegisterForm";

import {
    SpacingStyled,
    LoginStyled,
    RowLoginStyled,
} from "../components/StyledComponent/Login.Styled";

export default function Register() {
    function handleSubmitRegister(formData) {
        // const { taiKhoan, matKhau, hoTen, soDT, email } = formData;
        console.log("formData Register", formData);
    }
    return (
        <LoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
            <RowLoginStyled justify='center'>
                <Col xs={24} md={12} lg={10}>
                    <RegisterForm handleSubmitRegister={handleSubmitRegister} />
                </Col>
            </RowLoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
        </LoginStyled>
    );
}
