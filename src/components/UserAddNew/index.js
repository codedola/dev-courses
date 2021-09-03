import React from 'react'
import { Input, Space , Drawer, Radio, Button} from "antd";
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


export default function UserAddNew({visibleFormNewUser, closeFormAddNewUser}) {
  

    const onFinish = (formData) => {
         console.log("Form data new user", formData)
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
                className="add_new-user">
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
