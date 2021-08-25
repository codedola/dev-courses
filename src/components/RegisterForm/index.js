import React from "react";
import { Input, Space } from "antd";
import {
    UserOutlined,
    LockOutlined,
    FontColorsOutlined,
    PhoneOutlined,
    MailOutlined,
} from "@ant-design/icons";
import {
    FormStyled,
    FormItemStyled,
    ButtonSytled,
} from "../StyledComponent/Login.Styled";
import { Link } from "react-router-dom";

export default function RegisterForm() {
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
            <FormItemStyled name='hoTen'>
                <Input placeholder='Họ tên' prefix={<FontColorsOutlined />} />
            </FormItemStyled>
            <FormItemStyled name='soDT'>
                <Input placeholder='Số điên thoại' prefix={<PhoneOutlined />} />
            </FormItemStyled>
            <FormItemStyled name='email'>
                <Input placeholder='Email' prefix={<MailOutlined />} />
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
                        Đăng ký
                    </ButtonSytled>
                    <Link to='/login'>Đăng nhập</Link>
                </Space>
            </FormItemStyled>
        </FormStyled>
    );
}
