import React from "react";
import { Form, Input, Button, Col, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
    SpacingStyled,
    FormStyled,
    LoginStyled,
    RowLoginStyled,
} from "../components/StyledComponent/Login.Styled";
import { Link } from "react-router-dom";
export default function Login() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    return (
        <LoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
            <RowLoginStyled justify='center'>
                <Col xs={24} md={12} lg={10}>
                    <FormStyled name='basic' size='large' onFinish={onFinish}>
                        <Form.Item name='taiKhoan'>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder='Nhập tài khoản'
                            />
                        </Form.Item>

                        <Form.Item name='matKhau'>
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder='Nhập mật khẩu'
                            />
                        </Form.Item>

                        <Form.Item>
                            <Space
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Button
                                    type='primary'
                                    size='large'
                                    htmlType='submit'
                                    block
                                >
                                    Đăng nhập
                                </Button>
                                <Link to='/register'>Đăng ký</Link>
                            </Space>
                        </Form.Item>
                    </FormStyled>
                </Col>
            </RowLoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
        </LoginStyled>
    );
}
