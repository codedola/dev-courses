import React from "react";
import { List, Badge, Avatar, Tag, Empty, Popover } from "antd";
import {SettingOutlined } from "@ant-design/icons"
import AvatarHocVien from "../../assets/images/avatar1.jpg";
import AvatarGiaoVu from "../../assets/images/avatar2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { EmptyMyCourse , ListHandleRegisterCourse} from "../Styled/Header.Styled";
import { ListManagerUserStyled } from "../Styled/Dashboard.Styled";
import { actDeleteUserAsync} from "../../store/user/actions"
import Highlighter from "react-highlight-words";
const permission = {
    HV: {
        color: "blue",
        avatar: AvatarHocVien,
    },
    GV: {
        color: "red",
        avatar: AvatarGiaoVu,
    },
};
export default function ManagerUserList({
    searchText,
    listFilter,
    listNotFilter,
}) {
    const dispatch = useDispatch();
    const hashCategoriesUser = useSelector(
        (state) => state.User.hashCategoriesUser
    );

    function handleDeleteUser(taiKhoan) {
        return function () {
            // console.log("taiKhoan delete user", taiKhoan)
            dispatch(actDeleteUserAsync(taiKhoan))
        }
    }
    return (
        <ListManagerUserStyled itemLayout='horizontal'>
            {/* List Filter */}
            {listFilter &&
                listFilter.map((user, index) => {
                    const typeUser = user.maLoaiNguoiDung;
                    const nameType = hashCategoriesUser[typeUser];
                    const { color, avatar } = permission[typeUser];
                    return (
                        <List.Item key={index}>
                            <List.Item.Meta
                                avatar={
                                    <Badge dot={true} color='lime'>
                                        <Avatar src={avatar} />
                                    </Badge>
                                }
                                title={
                                    <>
                                        <p className='user_name'>
                                            <Highlighter
                                                highlightClassName='YourHighlightClass'
                                                searchWords={[searchText]}
                                                autoEscape={true}
                                                textToHighlight={user.hoTen}
                                            />
                                        </p>
                                        <Tag
                                            color={color}
                                            style={{
                                                marginLeft: 10,
                                                borderRadius: 10,
                                            }}
                                        >
                                            {nameType}
                                        </Tag>
                                    </>
                                }
                                // description={`${user.taiKhoan} - ${user.email}`}
                                description={user.email}
                            />
                              <Popover
                                    placement='left'
                                    trigger='hover'
                                    arrowPointAtCenter
                                    content={
                                        <ListHandleRegisterCourse>
                                            <List.Item
                                                className='delete'
                                                onClick={handleDeleteUser(user.taiKhoan)}
                                            >
                                                Xóa user
                                            </List.Item>
                                        </ListHandleRegisterCourse>
                                    }
                                >
                            <div style={{cursor: "pointer", color:"#a0a0a0"}}>
                                <SettingOutlined />
                            </div>
                        </Popover>
                        </List.Item>
                    );
                })}

            {/* Empty Result */}
            {listFilter.length === 0 ? (
                <List.Item className='empty filter'>
                    <EmptyMyCourse
                        className='filter_course'
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={null}
                    />
                    <div className='notify_empty'>
                        <Highlighter
                            highlightClassName='YourHighlightClass'
                            searchWords={[searchText]}
                            autoEscape={true}
                            textToHighlight={`Không tìm thấy ${searchText}`}
                        />
                    </div>
                </List.Item>
            ) : null}

            {/* List Not Filter */}
            {listNotFilter &&
                listNotFilter.map((user, index) => {
                    const typeUser = user.maLoaiNguoiDung;
                    const nameType = hashCategoriesUser[typeUser];
                    const { color, avatar } = permission[typeUser];
                    return (
                        <List.Item key={index}>
                            <List.Item.Meta
                                avatar={
                                    <Badge dot={true} color='lime'>
                                        <Avatar src={avatar} />
                                    </Badge>
                                }
                                title={
                                    <>
                                        <p className='user_name'>
                                            {user.hoTen}
                                        </p>

                                        <Tag
                                            color={color}
                                            style={{
                                                marginLeft: 10,
                                                borderRadius: 10,
                                            }}
                                        >
                                            {nameType}
                                        </Tag>
                                    </>
                                }
                                // description={`${user.taiKhoan} - ${user.email}`}
                                description={user.email}
                            />
                              <Popover
                                    placement='left'
                                    trigger='hover'
                                    arrowPointAtCenter
                                    content={
                                        <ListHandleRegisterCourse>
                                            <List.Item
                                                className='delete'
                                                onClick={handleDeleteUser(user.taiKhoan)}
                                            >
                                                Xóa user
                                            </List.Item>
                                        </ListHandleRegisterCourse>
                                    }
                                >
                            <div style={{cursor: "pointer", color:"#a0a0a0"}}>
                                <SettingOutlined />
                            </div>
                        </Popover>
                        </List.Item>
                    );
                })}
        </ListManagerUserStyled>
    );
}
