import React from "react";
import { Input, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
    FormStyled,
    FormItemStyled,
    ButtonSytled,
} from "../Styled/Login.Styled";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { showMessageErrorForm } from "../shared/MessageValidateForm";
export default function LoginForm({ handleSubmitLogin, loading }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onFinish = (values) => {
        if (handleSubmitLogin && typeof handleSubmitLogin === "function") {
            handleSubmitLogin(values);
        }
    };
    return (
        <FormStyled name='basic' size='large' onFinish={handleSubmit(onFinish)}>
            <FormItemStyled
                name='taiKhoan'
                extra={showMessageErrorForm(errors, "taiKhoan")}
            >
                <Input
                    prefix={<UserOutlined />}
                    placeholder='Nhập tài khoản'
                    {...register("taiKhoan", { required: true })}
                />
            </FormItemStyled>

            <FormItemStyled
                name='matKhau'
                extra={showMessageErrorForm(errors, "matKhau")}
            >
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder='Nhập mật khẩu'
                    {...register("matKhau", { required: true })}
                />
            </FormItemStyled>

            <FormItemStyled style={{ marginTop: 10 }}>
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
                        {loading ? "Loading..." : "Đăng nhập"}
                    </ButtonSytled>
                    <Link to='/register'>Đăng ký</Link>
                </Space>
            </FormItemStyled>
        </FormStyled>
    );
}
