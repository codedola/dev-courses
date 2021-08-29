import React from "react";
import { Space, Input, List, Popover } from "antd";
import { SearchOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { ListHandleRegisterCourse } from "../Styled/Header.Styled";
export default function ManagerUserTool({
    searchText,
    onChangeSearchText,
    onChangeOrderBy,
}) {
    return (
        <div className='tool'>
            <Space size='large'>
                <Input
                    size='middle'
                    value={searchText}
                    allowClear
                    placeholder='Search users...'
                    bordered={false}
                    prefix={<SearchOutlined />}
                    onChange={onChangeSearchText}
                />
                <Popover
                    placement='bottomRight'
                    trigger='hover'
                    arrowPointAtCenter
                    content={
                        <ListHandleRegisterCourse>
                            <List.Item
                                className='read_more'
                                onClick={onChangeOrderBy("GV")}
                            >
                                Giáo vụ
                            </List.Item>
                            <List.Item
                                className='read_more'
                                onClick={onChangeOrderBy("HV")}
                            >
                                Học viên
                            </List.Item>
                        </ListHandleRegisterCourse>
                    }
                >
                    <UserSwitchOutlined />
                </Popover>
            </Space>
        </div>
    );
}
