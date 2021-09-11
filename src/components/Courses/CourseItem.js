import React, { useState, useMemo } from "react";
import { Rate, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { CardStyled, WapperCardItem, SpaceCategoryAndPrice } from "../Styled/Card.Styled";

import CourseInfoModal from "./CourseInfoModal";
import CourseItemAction from "./CourseItemAction";
import { useSelector } from "react-redux";
export default function CourseItem({ course }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const currentUser = useSelector((state) => state.Auths.currentUser);
    const listCourseRegister = currentUser?.chiTietKhoaHocGhiDanh;

    const checkRegister = useMemo(() => {
        const courseRegister = listCourseRegister?.find(
            (item) => item.maKhoaHoc === course.maKhoaHoc
        );
        return Boolean(courseRegister);
    }, [course, listCourseRegister]);

    //
    const { tenKhoaHoc, hinhAnh, biDanh, nguoiTao, danhMucKhoaHoc, luotXem } =
        course;

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <WapperCardItem>
            <CardStyled hoverable cover={<img alt={biDanh} src={hinhAnh} />}>
                {/* Information */}
                <h3 className='title'>{tenKhoaHoc}</h3>
                <p className='author'>{nguoiTao?.hoTen || "Anonymous"}</p>

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
                {/* Price and Category */}
                <SpaceCategoryAndPrice>
                    <Tag color='orange' className="category">
                        {danhMucKhoaHoc?.tenDanhMucKhoaHoc || "Coding"}
                    </Tag>
                    <div className="price">
                        <span className="free">Free</span>
                        <span className="pay">$89.99</span>
                    </div>
                </SpaceCategoryAndPrice>

                {/* action */}
                <CourseItemAction
                    showModal={showModal}
                    isRegister={checkRegister}
                    course={course}
                />
            </CardStyled>

            <CourseInfoModal
                course={course}
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
            />
        </WapperCardItem>
    );
}
