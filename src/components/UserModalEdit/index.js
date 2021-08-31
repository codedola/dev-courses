import React, { useEffect, useState } from "react";
import { ModalCourseInfo } from "../Styled/Course.Styled";
import {
    FormStyled,
    FormItemStyled,
    ButtonRegister,
} from "../Styled/Login.Styled";
import { Input, Space, message, Radio, Form } from "antd";
import {
    UserOutlined,
    LockOutlined,
    PhoneOutlined,
    FontColorsOutlined,
    MailOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { regexEmail, regexSDT } from "../shared/MessageValidateForm";
import { actUploadInfoCurrentUserAsync } from "../../store/user/actions";
export default function ModalUserEdit({ isModalVisible, onCancelModal }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const isDashboard = useRouteMatch("/dashboard");

    const currentUser = useSelector((state) => state.Auths.currentUser);
    useEffect(function () {
        message.config({
            top: 50,
            duration: 2,
            maxCount: 10,
            rtl: true,
            getContainer: () => document.querySelector("form.user_edit"),
        });
    }, []);

    //
    function validateDataForm(objData) {
        let isName = objData.hoTen === "";
        let isEmail = regexEmail.test(objData.email.toLowerCase());
        let isPhone = objData.soDT.match(regexSDT);
        if (!isEmail || !isPhone) {
            isName && message.warning("Họ tên không được rỗng");
            message.warning(
                `${!isEmail ? "Email " : ""}${
                    !isPhone ? `${!isEmail ? "-" : ""} Số điện thoại ` : ""
                }không hợp lệ`
            );
            return false;
        }
        return true;
    }
    function onFinish(formData) {
        const isOK = validateDataForm(formData);
        if (!isOK || loading) return;

        const { taiKhoan, matKhau, hoTen, soDT, maLoaiNguoiDung, email } =
            formData;
        setLoading(true);
        dispatch(
            actUploadInfoCurrentUserAsync({
                taiKhoan,
                matKhau,
                hoTen,
                soDT,
                maLoaiNguoiDung,
                email,
            })
        ).then(function () {
            setLoading(false);
            onCancelModal();
        });
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
                    maLoaiNguoiDung: currentUser?.maLoaiNguoiDung,
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

                {/* Ma loai nguoi dung */}
                <FormItemStyled name='maLoaiNguoiDung'>
                    <Radio.Group>
                        <Radio value='HV'>Học viên</Radio>
                        <Radio value='GV'>Giáo vụ</Radio>
                    </Radio.Group>
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
                            {loading ? "Đang lưu" : "Lưu thông tin"}
                        </ButtonRegister>
                    </Space>
                </FormItemStyled>
            </FormStyled>
        </ModalCourseInfo>
    );
}
