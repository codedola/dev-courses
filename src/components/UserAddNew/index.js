import React from 'react'
import { Input, Space , Drawer, Radio, Button, message, Form} from "antd";
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
} from "../Styled/Login.Styled";
import { regexEmail, regexSDT, } from "../shared/MessageValidateForm"
import {showNotification, typeNotify, typePlacement } from "../shared/Notification"
import {useDispatch } from "react-redux";
import { actCreateNewUserAsync} from "../../store/user/actions"
export default function UserAddNew({visibleFormNewUser, closeFormAddNewUser}) {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    function validateDataForm(objData) {
        message.config({
            top: 50,
            duration: 2,
            maxCount: 10,
            rtl: true,
            getContainer: () => document.querySelector("form.add_new-user"),
        });
        let isHoTen = objData.hoTen === "";
        let isMatKhau = objData.matKhau === "";
        let isTaiKhoan = objData.taikhoan === "";
        isHoTen && message.warning("Họ tên không được rỗng");
        isMatKhau && message.warning("Mật khẩu không được rỗng");
        isTaiKhoan && message.warning("Tài khoản không được rỗng");
        let isEmail = regexEmail.test(objData.email.toLowerCase());
        let isPhone = objData.soDT.match(regexSDT);
        if (!isEmail || !isPhone) {
            message.warning(
                `${!isEmail ? "Email " : ""}${
                    !isPhone ? `${!isEmail ? "-" : ""} Số điện thoại ` : ""
                }không hợp lệ`
            );
            return false;
        }
        if (isHoTen || isMatKhau || isTaiKhoan) {
            return false;
        }
       
        return true;
    }

    const onFinish = (formData) => {
        let isOK = validateDataForm(formData)
        if (!isOK) return;
        const {taiKhoan, matKhau, hoTen, soDT, maLoaiNguoiDung, email } = formData;
        dispatch(actCreateNewUserAsync({ taiKhoan, matKhau, hoTen, soDT, maLoaiNguoiDung, email }))
            .then(function (res) {
                if (res.ok) {
                    closeFormAddNewUser();
                    form.resetFields();
                    showNotification({
                        type: typeNotify.success,
                        placement: typePlacement.bottomRight,
                        message: "Tạo thành viên thành công"
                    })
                }
            })
    };

    return (
        <Drawer
            title="Thêm người dùng mới"
            width={540}
            onClose={closeFormAddNewUser}
            visible={visibleFormNewUser}
            zIndex={2000}
         
        >
            <FormStyled
                name='basic'
                size='large'
                onFinish={onFinish}
                className="add_new-user"
                form={form}
            >
            {/* Form Item TAI KHOAN */}
            <FormItemStyled
                name='taiKhoan'
                
            >
                <Input
                    prefix={<UserOutlined />}
                        placeholder='Nhập tài khoản'
                       
                    
                />
            </FormItemStyled>

            {/* Form Item MAT KHAU */}
            <FormItemStyled
                name='matKhau'
               
            >
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder='Nhập mật khẩu'
                  
                />
            </FormItemStyled>

            {/* Form Item HO TEN */}
            <FormItemStyled
                name='hoTen'
                
            >
                <Input
                    placeholder='Họ tên'
                    prefix={<FontColorsOutlined />}
                   
                />
            </FormItemStyled>

            {/* Form Item  */}
            <FormItemStyled
                name='soDT'
              
            >
                <Input
                    placeholder='Số điên thoại'
                    prefix={<PhoneOutlined />}
                   
                />
            </FormItemStyled>

            <FormItemStyled
                name='email'
               
            >
                <Input
                    placeholder='Email'
                    prefix={<MailOutlined />}
                  
                />
                </FormItemStyled>
                
                <FormItemStyled
                    name='maLoaiNguoiDung'
                    label="Loại người dùng"
                   >
                    <Radio.Group>
                        <Radio value='HV'>Học viên</Radio>
                        <Radio value='GV'>Giáo vụ</Radio>
                    </Radio.Group>
                  
                </FormItemStyled>

            <FormItemStyled style={{ marginTop: 20 }}>
                <Space
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        type='default'
                        size='large'
                        htmlType='submit'
                        block
                    >
                       Tạo người dùng mới
                    </Button>
                   
                </Space>
            </FormItemStyled>
        </FormStyled>
        </Drawer>
    )
}
