import React, { useState } from "react";
import { Rate, Tag, Button, Space, Popconfirm } from "antd";
import { EyeOutlined , DeleteFilled, CloseCircleOutlined} from "@ant-design/icons";
import { CardStyled, WapperCardItem } from "../Styled/Card.Styled";
import CourseInfoModal from "./CourseInfoModal";
import { useSelector, useDispatch } from "react-redux";
import { actDeleteCourseCreationAsync } from "../../store/course/actions";
import { showNotification, typeNotify, typePlacement } from "../shared/Notification";
export default function CourseItem({ course, isShowCreation = false }) {
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

    const fullNamAuhtor = isShowCreation ? currentUser?.hoTen : nguoiTao?.hoTen;

    return (
        <WapperCardItem>
            <CardStyled hoverable cover={<img alt={biDanh} src={hinhAnh} />}>
                {/* Information */}
                <h3 className='title'>{tenKhoaHoc}</h3>
                <p className='author'>{ fullNamAuhtor || "Anonymous"}</p>

                {/* rate */}
                <div className='rate'>
                    <div className='star'>
                        <span className='num_star'>4.5</span>
                        <Rate disabled allowHalf defaultValue={4.5} />
                    </div>
                    <div className='view'>
                        <EyeOutlined />
                        <span>{luotXem}</span>
                    </div>
                </div>
                {/* Category */}

                <Tag color='orange' style={{ fontWeight: 600 }}>
                    {danhMucKhoaHoc?.tenDanhMucKhoaHoc || "Coding"}
                </Tag>

                {/* action */}
                {isShowCreation ?  <Space className="action_creation">
                    <Button type="default" onClick={showModal} className="view_detail" block>Xem chi tiết</Button>
                       
                    <Popconfirm placement="top"
                        title="Bạn muốn xóa khóa học này không ?"
                        onConfirm={confirmDeleteCourse}
                        okText="Xóa"
                        cancelText="Hủy"
                        icon={<CloseCircleOutlined style={{color: "red"}} />}
                    >
                        <div className="delete_course">
                            <DeleteFilled />
                        </div>
                    </Popconfirm>
                </Space> : null
                }
               
            </CardStyled>

            <CourseInfoModal
                course={course}
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
            />
        </WapperCardItem>
    );
}
