import React from "react";
import { List, Badge, Avatar, Tag } from "antd";
import AvatarUser from "../../assets/images/avatar1.jpg";
const colorPermission = {
    HV: "blue",
    GV: "red",
};
export default function ManagerUserList({ listUser }) {
    return (
        <List itemLayout='horizontal'>
            {listUser &&
                listUser.map((user, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            avatar={
                                <Badge dot={true} color='lime'>
                                    <Avatar src={AvatarUser} />
                                </Badge>
                            }
                            title={
                                <div>
                                    <a href='https://ant.design'>
                                        {user.hoTen}
                                    </a>
                                    <Tag
                                        color={
                                            colorPermission[
                                                user.maLoaiNguoiDung
                                            ] || ""
                                        }
                                        style={{
                                            marginLeft: 10,
                                            borderRadius: 10,
                                        }}
                                    >
                                        {user.tenLoaiNguoiDung}
                                    </Tag>
                                </div>
                            }
                            // description={`${user.taiKhoan} - ${user.email}`}
                            description={user.email}
                        />
                    </List.Item>
                ))}
        </List>
    );
}
