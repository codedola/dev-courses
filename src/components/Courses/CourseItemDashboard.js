import React, { useState } from "react";
import { Rate, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { CardStyled, WapperCardItem } from "../Styled/Card.Styled";
import CourseInfoModal from "./CourseInfoModal";
export default function CourseItem({ course }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { tenKhoaHoc, hinhAnh, biDanh, nguoiTao, danhMucKhoaHoc, luotXem } =
        course;

    // const showModal = () => {
    //     setIsModalVisible(true);
    // };

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
                {/* Category */}

                <Tag color='orange' style={{ fontWeight: 600 }}>
                    {danhMucKhoaHoc?.tenDanhMucKhoaHoc || "Coding"}
                </Tag>

                {/* action */}
            </CardStyled>

            <CourseInfoModal
                course={course}
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
            />
        </WapperCardItem>
    );
}
