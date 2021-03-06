import React from "react";
import { List, Avatar } from "antd";
import {
    LogoutOutlined,
    ReadOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import AvatarDefault from "../../assets/images/avata_default.png";
import {
    ListUserHeader,
    PopoverWapperUserHeader,
} from "../Styled/Header.Styled";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actLogout } from "../../store/auth/actions";

export default function HeaderUser() {
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.Auths.currentUser);

    function handleLogout() {
        dispatch(actLogout());
    }
    return (
        <PopoverWapperUserHeader
            placement='bottomRight'
            content={
                <ListUserHeader size='small'>
                    <List.Item className='courses'>
                        <Link to='/dashboard'>
                            <ReadOutlined />
                            <span>Dashboard</span>
                        </Link>
                    </List.Item>
                    <List.Item className='setting'>
                        <Link to='/setting'>
                            <SettingOutlined />
                            <span>Setting</span>
                        </Link>
                    </List.Item>
                    <List.Item className='logout' onClick={handleLogout}>
                        <LogoutOutlined />
                        <span>Logout</span>
                    </List.Item>
                </ListUserHeader>
            }
            trigger='hover'
        >
            <div className='avatar'>
                <Avatar size='default' alt='user_avatar' src={AvatarDefault} />
                <span className='user_name'>{currentUser.taiKhoan}</span>
            </div>
        </PopoverWapperUserHeader>
    );
}
