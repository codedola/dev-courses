import React, { useState } from "react";
import AVATAR from "../../assets/images/avatar1.jpg";
import { SettingOutlined } from "@ant-design/icons";
import { Space, Image, Tag, Badge, Button, Descriptions, Tooltip } from "antd";
import { DescriptionsUser } from "../Styled/Dashboard.Styled";
import UserModalEdit from "../UserModalEdit";
import { useSelector } from "react-redux";
const permission = {
    HV: {
        color: "blue",
        name: "Học viên",
    },
    GV: {
        color: "red",
        name: "Giáo vụ",
    },
};
export default function UserDescription() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const currentUser = useSelector((state) => state.Auths.currentUser);
    const { email, hoTen, maLoaiNguoiDung, maNhom, matKhau, soDT, taiKhoan } =
        currentUser || {};

    //isModalVisible, handleCancel
    function onCancelModal() {
        setIsModalVisible(false);
    }
    function onShowModal() {
        setIsModalVisible(true);
    }
    return (
        <>
            <Space>
                <Image width={120} src={AVATAR} />
                <DescriptionsUser
                    title={
                        <div className='title_info'>
                            <span className='fullname'>{hoTen}</span>
                            <Tag color={permission[maLoaiNguoiDung]?.color}>
                                {permission[maLoaiNguoiDung]?.name}
                            </Tag>
                            <Badge status='processing' text='online' />
                        </div>
                    }
                    size='small'
                    column={2}
                    extra={
                        <Tooltip
                            placement='bottom'
                            color='cyan'
                            title='Chỉnh sửa'
                            mouseEnterDelay={0}
                            mouseLeaveDelay={0}
                            overlayInnerStyle={{
                                borderRadius: 10,
                            }}
                        >
                            <Button
                                className='edit_btn'
                                shape='round'
                                onClick={onShowModal}
                            >
                                <SettingOutlined />
                            </Button>
                        </Tooltip>
                    }
                >
                    <Descriptions.Item label='Họ tên'>
                        {hoTen}
                    </Descriptions.Item>
                    <Descriptions.Item label='Tài khoản'>
                        {taiKhoan}
                    </Descriptions.Item>
                    <Descriptions.Item label='Nhóm'>{maNhom}</Descriptions.Item>
                    <Descriptions.Item label='Mật khẩu'>
                        {matKhau}***
                    </Descriptions.Item>
                    <Descriptions.Item label='Email'>{email}</Descriptions.Item>
                    <Descriptions.Item label='Phone'>{soDT}</Descriptions.Item>
                </DescriptionsUser>
            </Space>

            <UserModalEdit
                isModalVisible={isModalVisible}
                onCancelModal={onCancelModal}
            />
        </>
    );
}
