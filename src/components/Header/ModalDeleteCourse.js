import React from "react";
import { List } from "antd";
import { ModalStyled } from "../Styled/Header.Styled";
export default function ModalDeleteCourse({
    isModalDelete,
    onCancelModalDelete,
}) {
    const handleDeleteRegisterCourse = () => {};
    return (
        <ModalStyled
            title='Hủy ghi danh khóa học ?'
            visible={isModalDelete}
            onCancel={onCancelModalDelete}
            footer={null}
            width={380}
            closable={false}
            zIndex={1031}
        >
            <List size='large'>
                <List.Item
                    className='delete'
                    onClick={handleDeleteRegisterCourse}
                >
                    Xóa bài viết
                </List.Item>
                <List.Item className='cancel' onClick={onCancelModalDelete}>
                    Hủy
                </List.Item>
            </List>
        </ModalStyled>
    );
}
