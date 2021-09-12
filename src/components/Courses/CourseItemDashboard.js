import React, { useState } from "react";
import { Rate, Tag, Button, Space, Popconfirm } from "antd";
import { EyeOutlined , DeleteFilled, CloseCircleOutlined} from "@ant-design/icons";
import { CardStyled, WapperCardItem, SpaceCategoryAndPrice } from "../Styled/Card.Styled";
import CourseInfoModal from "./CourseInfoModal";
import { useSelector, useDispatch } from "react-redux";
import { actDeleteCourseCreationAsync } from "../../store/course/actions";
import { showNotification, typeNotify, typePlacement } from "../shared/Notification";
export default function CourseItem({ course, isShowCreation = false }) {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
   
   
    const currentUser = useSelector(state => state.Auths.currentUser)
 
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    function confirmDeleteCourse() {
        dispatch(actDeleteCourseCreationAsync(course?.maKhoaHoc, course?.danhMucKhoaHoc?.maDanhMucKhoahoc))
            .then(function (res) {
                if (res.ok) {
                    showNotification({
                        type: typeNotify.success,
                        placement: typePlacement.bottomLeft,
                        message: res.message
                    })
                } else {
                       showNotification({
                        type: typeNotify.error,
                        placement: typePlacement.bottomLeft,
                        message: res.message
                    })
                }
                
        })
    }

    const fullNamAuhtor = isShowCreation ? currentUser?.hoTen : course?.nguoiTao?.hoTen;

    return (
        <WapperCardItem>
            <CardStyled hoverable cover={<img alt={course?.biDanh} src={course?.hinhAnh} />}>
                {/* Information */}
                <h3 className='title'>{course?.tenKhoaHoc}</h3>
                <p className='author'>{ fullNamAuhtor || "Anonymous"}</p>

                {/* rate */}
                <div className='rate'>
                    <div className='star'>
                        <span className='num_star'>4.5</span>
                        <Rate disabled allowHalf defaultValue={4.5} />
                    </div>
                    <div className='view'>
                        <EyeOutlined />
                        <span>{course?.luotXem}</span>
                    </div>
                </div>
                {/* Category */}

                 <SpaceCategoryAndPrice>
                    <Tag color='orange' className="category">
                        {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc || "Coding"}
                    </Tag>
                    <div className="price">
                        <span className="free">Free</span>
                        <span className="pay">$89.99</span>
                    </div>
                </SpaceCategoryAndPrice>

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
