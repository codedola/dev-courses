import React from "react";
import { Button, Tooltip } from "antd";
import {
    EditOutlined,
    PicRightOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actRegisterCourseAsync } from "../../store/course/actions";
import { ActionCard } from "../Styled/Card.Styled";
import { showNotification, typeNotify } from "../shared/Notification";
export default function CourseItemAction({ showModal, isRegister, course }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector((state) => state.Auths.currentUser);
    function handleRegisterCourse() {
        if (!currentUser || currentUser === null) {
            history.push("/login");
            return;
        }
        const { nguoiTao, maKhoaHoc, tenKhoaHoc } = course;
        const taiKhoan = nguoiTao.taiKhoan;
        dispatch(
            actRegisterCourseAsync({ taiKhoan, maKhoaHoc, tenKhoaHoc })
        ).then(function (res) {
            if (res.ok) {
                showNotification({
                    type: typeNotify.success,
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
                    <span>Đã đăng ký</span>
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
                    <span>Đăng ký</span>
                </Button>
            )}

            <Tooltip
                placement='topRight'
                title='Xem chi tiết'
                mouseEnterDelay={0}
                mouseLeaveDelay={0}
            >
                <Button
                    type='default'
                    shape='circle'
                    onClick={showModal}
                    className='view-more'
                >
                    <PicRightOutlined />
                </Button>
            </Tooltip>
        </ActionCard>
    );
}
