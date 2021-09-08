import React, { useState } from "react";
import { Rate, Tag, Button, Space, Popconfirm } from "antd";
import { EyeOutlined , DeleteFilled, CloseCircleOutlined} from "@ant-design/icons";
import { CardStyled, WapperCardItem } from "../Styled/Card.Styled";
import CourseInfoModal from "./CourseInfoModal";
import { useSelector, useDispatch } from "react-redux";
import { actDeleteCourseCreationAsync } from "../../store/course/actions";
import { showNotification, typeNotify, typePlacement } from "../shared/Notification";
export default function CourseItemEdit({ course, isShowCreation = false }) {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
   
    const currentUser = useSelector(state => state.Auths.currentUser)
    const { tenKhoaHoc, hinhAnh, biDanh, nguoiTao, danhMucKhoaHoc, luotXem } =
        course;
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    function confirmDeleteCourse() {
        dispatch(actDeleteCourseCreationAsync(course.maKhoaHoc, danhMucKhoaHoc.maDanhMucKhoahoc))
            .then(function (res) {
                showNotification({
                    type: typeNotify.success,
                    placement: typePlacement.bottomLeft,
                    message: res.message
                })
        })
    }

    const fullNamAuhtor = currentUser?.hoTen

    return (
        <WapperCardItem>
            <CardStyled hoverable cover={<img alt={biDanh} src={hinhAnh} />}>
                {/* Information */}
                <h3 className='title'>{tenKhoaHoc}</h3>
                <p className='author'>{ fullNamAuhtor || "Anonymous"}</p>
            </CardStyled>
        </WapperCardItem>
    );
}
