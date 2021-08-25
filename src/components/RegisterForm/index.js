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
    ButtonRegister,
} from "../StyledComponent/Login.Styled";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
    regexSDT,
    regexEmail,
    showMessageErrorForm,
} from "../shared/MessageValidateForm";

export default function RegisterForm({ handleSubmitRegister }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onFinish = (formData) => {
        handleSubmitRegister(formData);
    };

    return (
        <FormStyled name='basic' size='large' onFinish={handleSubmit(onFinish)}>
            {/* Form Item TAI KHOAN */}
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

            {/* Form Item MAT KHAU */}
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

            {/* Form Item HO TEN */}
            <FormItemStyled
                name='hoTen'
                extra={showMessageErrorForm(errors, "hoTen")}
            >
                <Input
                    placeholder='Họ tên'
                    prefix={<FontColorsOutlined />}
                    {...register("hoTen", { required: true })}
                />
            </FormItemStyled>

            {/* Form Item  */}
            <FormItemStyled
                name='soDT'
                extra={showMessageErrorForm(errors, "soDT", "phone")}
            >
                <Input
                    placeholder='Số điên thoại'
                    prefix={<PhoneOutlined />}
                    {...register("soDT", { required: true, pattern: regexSDT })}
                />
            </FormItemStyled>

            <FormItemStyled
                name='email'
                extra={showMessageErrorForm(errors, "email", "email")}
            >
                <Input
                    placeholder='Email'
                    prefix={<MailOutlined />}
                    {...register("email", {
                        required: true,
                        pattern: regexEmail,
                    })}
                />
            </FormItemStyled>

            <FormItemStyled style={{ marginTop: 10 }}>
                <Space
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <ButtonRegister
                        type='primary'
                        size='large'
                        htmlType='submit'
                        block
                    >
                        Đăng ký
                    </ButtonRegister>
                    <Link to='/login'>Đăng nhập</Link>
                </Space>
            </FormItemStyled>
        </FormStyled>
    );
}
