import React from "react";
import { Button, Tooltip } from "antd";
import {
    EditOutlined,
    FileSearchOutlined, 
    CheckCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actRegisterCourseAsync } from "../../store/course/actions";
import { ActionCard } from "../Styled/Card.Styled";
import {
    showNotification,
    typeNotify,
    typePlacement,
} from "../shared/Notification";
export default function CourseItemAction({ showModal, isRegister, course, }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector((state) => state.Auths.currentUser);
    function handleRegisterCourse() {
        if (!currentUser || currentUser === null) {
            history.push("/login");
            return;
        }
        const { maKhoaHoc, tenKhoaHoc } = course;
        const taiKhoan = currentUser.taiKhoan;
        dispatch(
            actRegisterCourseAsync({ taiKhoan, maKhoaHoc, tenKhoaHoc })
        ).then(function (res) {
            if (res.ok) {
                showNotification({
                    type: typeNotify.success,
                    message: res.message,
                    description: `Khóa học ${tenKhoaHoc} đã ghi danh thành công`,
                    placement: typePlacement.topLeft,
                });
            } else {
                showNotification({
                    type: typeNotify.warning,
                    message: res.message,
                });
            }
        });
    }
    return (
        <ActionCard>
            {isRegister ? (
                <Button type='primary' className='add-cart register' block>
                    <CheckCircleOutlined />
                    <span>Đã ghi danh</span>
                </Button>
            ) : (
                <Button
                    type='primary'
                    className='add-cart'
                    danger
                    block
                    onClick={handleRegisterCourse}
                >
                    <EditOutlined />
                    <span>Ghi danh</span>
                </Button>
            )}

            <Tooltip
                placement='topRight'
                title='Xem chi tiết'
                mouseEnterDelay={0}
                mouseLeaveDelay={0}
                overlayInnerStyle={{
                    borderRadius: 10,
                }}
            >
                <Button
                    type='default'
                    onClick={showModal}
                    // ghost={true}
                    className='view-more'
                    
                >
                    <FileSearchOutlined />
                </Button>
            </Tooltip>
        </ActionCard>
    );
}
