import React from "react";
import { Input, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
    FormStyled,
    FormItemStyled,
    ButtonSytled,
} from "../StyledComponent/Login.Styled";
import { Link } from "react-router-dom";
export default function LoginForm() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    return (
        <FormStyled name='basic' size='large' onFinish={onFinish}>
            <FormItemStyled name='taiKhoan'>
                <Input prefix={<UserOutlined />} placeholder='Nhập tài khoản' />
            </FormItemStyled>

            <FormItemStyled name='matKhau'>
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder='Nhập mật khẩu'
                />
            </FormItemStyled>

            <FormItemStyled>
                <Space
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <ButtonSytled
                        type='primary'
                        size='large'
                        htmlType='submit'
                        block
                    >
                        Đăng nhập
                    </ButtonSytled>
                    <Link to='/register'>Đăng ký</Link>
                </Space>
            </FormItemStyled>
        </FormStyled>
    );
}
