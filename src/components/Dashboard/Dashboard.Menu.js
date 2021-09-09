import React, { useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Menu } from "antd";
import { MenuStyled } from "../Styled/Dashboard.Styled";
import {
    LogoutOutlined,
    FormOutlined,
    PlusCircleOutlined,
    UsergroupAddOutlined,
    BarChartOutlined,
} from "@ant-design/icons";
export default function DashboardMenu() {
    let { url } = useRouteMatch();
    const [keySelected, setKeySelected] = useState("1");

    function onSelectedKey(keyInfo) {
        setKeySelected(keyInfo.key);
    }

    return (
        <MenuStyled
            mode='inline'
            theme='light'
            selectedKeys={keySelected}
            onSelect={onSelectedKey}
            
        >
            <Menu.Item key='1' icon={<BarChartOutlined />}>
                <Link to={`${url}`}>Thông tin</Link>
            </Menu.Item>
         
            <Menu.Item key='3' icon={<PlusCircleOutlined />}>
                <Link to={`${url}/course-creation`}>Tạo khóa học</Link>
            </Menu.Item>

            <Menu.Item key='4' icon={<UsergroupAddOutlined />}>
                 <Link to={`${url}/course-upload`}>Chỉnh sửa khóa học</Link>
            </Menu.Item>

            <Menu.Item key='5' icon={<FormOutlined />}>
                <Link to={`${url}/change-password`}>Thay đổi profile</Link>
            </Menu.Item>

            <Menu.Item
                key='6'
                icon={<LogoutOutlined />}
                // onClick={handleLogout}
            >
                Đăng xuất
            </Menu.Item>
        </MenuStyled>
    );
}
