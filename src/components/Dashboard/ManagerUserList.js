import React from "react";
import { List, Badge, Avatar, Tag, Empty } from "antd";
import AvatarHocVien from "../../assets/images/avatar1.jpg";
import AvatarGiaoVu from "../../assets/images/avatar2.jpg";
import { useSelector } from "react-redux";
import { EmptyMyCourse } from "../Styled/Header.Styled";
import { ListManagerUserStyled } from "../Styled/Dashboard.Styled";
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
    const hashCategoriesUser = useSelector(
        (state) => state.User.hashCategoriesUser
    );
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
                                    <div>
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
                                    </div>
                                }
                                // description={`${user.taiKhoan} - ${user.email}`}
                                description={user.email}
                            />
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
                                    <div>
                                        <a href='https://ant.design'>
                                            {user.hoTen}
                                        </a>
                                        <Tag
                                            color={color}
                                            style={{
                                                marginLeft: 10,
                                                borderRadius: 10,
                                            }}
                                        >
                                            {nameType}
                                        </Tag>
                                    </div>
                                }
                                // description={`${user.taiKhoan} - ${user.email}`}
                                description={user.email}
                            />
                        </List.Item>
                    );
                })}
        </ListManagerUserStyled>
    );
}
