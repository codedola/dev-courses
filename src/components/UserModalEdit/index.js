import React from "react";
import { ModalCourseInfo } from "../Styled/Course.Styled";
import {
    FormStyled,
    FormItemStyled,
    ButtonRegister,
} from "../Styled/Login.Styled";
import { Input, Space } from "antd";
import {
    UserOutlined,
    LockOutlined,
    PhoneOutlined,
    FontColorsOutlined,
    MailOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ModalUserEdit({ isModalVisible, onCancelModal }) {
    const isDashboard = useRouteMatch("/dashboard");
    const currentUser = useSelector((state) => state.Auths.currentUser);

    function onFinish(formData) {
        console.log(formData);
    }

    return (
        <ModalCourseInfo
            width={600}
            title='Cập Nhật Thông Tin'
            visible={isModalVisible}
            footer={null}
            onCancel={onCancelModal}
            zIndex={2000}
            className={`${isDashboard ? "user_edit" : ""}`}
        >
            <FormStyled
                className={`${isDashboard ? "user_edit" : ""}`}
                name='basic'
                size='large'
                onFinish={onFinish}
                initialValues={{
                    taiKhoan: currentUser?.taiKhoan,
                    matKhau: currentUser?.matKhau,
                    hoTen: currentUser?.hoTen,
                    soDT: currentUser?.soDT,
                    email: currentUser?.email,
                }}
            >
                {/* Form Item TAI KHOAN */}
                <FormItemStyled
                    name='taiKhoan'
                    tooltip={{
                        title: "taiKhoan mặc định",
                        icon: <InfoCircleOutlined />,
                    }}
                >
                    <Input
                        disabled
                        prefix={<UserOutlined />}
                        placeholder='Nhập tài khoản'
                    />
                </FormItemStyled>

                {/* Form Item MAT KHAU */}
                <FormItemStyled name='matKhau'>
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder='Nhập mật khẩu'
                    />
                </FormItemStyled>

                {/* Form Item HO TEN */}
                <FormItemStyled name='hoTen'>
                    <Input
                        placeholder='Họ tên'
                        prefix={<FontColorsOutlined />}
                    />
                </FormItemStyled>

                {/* Form Item  */}
                <FormItemStyled name='soDT'>
                    <Input
                        placeholder='Số điên thoại'
                        prefix={<PhoneOutlined />}
                    />
                </FormItemStyled>

                <FormItemStyled name='email'>
                    <Input placeholder='Email' prefix={<MailOutlined />} />
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
                            className='btn_edit'
                        >
                            Lưu thông tin
                        </ButtonRegister>
                    </Space>
                </FormItemStyled>
            </FormStyled>
        </ModalCourseInfo>
    );
}
