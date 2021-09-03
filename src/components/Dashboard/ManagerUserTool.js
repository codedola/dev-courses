import React, {useState} from "react";
import { Space, Input, List, Popover, Tooltip} from "antd";
import { SearchOutlined, UserSwitchOutlined , PlusCircleOutlined} from "@ant-design/icons";
import { ListHandleRegisterCourse } from "../Styled/Header.Styled";
import UserAddNew from "../UserAddNew";
export default function ManagerUserTool({
    searchText,
    onChangeSearchText,
    onChangeOrderBy,
}) {
    //visibleFormNewUser, showFormAddNewUser, closeFormAddNewUser
    const [visibleFormNewUser, setVisibleFormNewUser] = useState(false);
    const showFormAddNewUser = () => {
        setVisibleFormNewUser(true)
    }
    const closeFormAddNewUser = () => {
        setVisibleFormNewUser(false)
    }
    return (
        <div className='tool'>
            <Space size='middle'>
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
                    placement='leftTop'
                    trigger='hover'
                    arrowPointAtCenter
                    content={
                        <ListHandleRegisterCourse>
                            <List.Item
                                className='category'
                                onClick={onChangeOrderBy("")}
                            >
                                Tất cả
                            </List.Item>
                            <List.Item
                                className='category'
                                onClick={onChangeOrderBy("GV")}
                            >
                                Giáo vụ
                            </List.Item>
                            <List.Item
                                className='category'
                                onClick={onChangeOrderBy("HV")}
                            >
                                Học viên
                            </List.Item>
                               
                        </ListHandleRegisterCourse>
                    }
                >
                    <UserSwitchOutlined />
                </Popover>

                
                <Tooltip
                    placement="bottomRight"
                    title="Thêm người dùng"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlayInnerStyle={{borderRadius: 10}}
                >
                    <PlusCircleOutlined onClick={showFormAddNewUser} />
                </Tooltip>
            </Space>

            <UserAddNew
                visibleFormNewUser={visibleFormNewUser}
           
                closeFormAddNewUser={closeFormAddNewUser}
            />
        </div>
    );
}
