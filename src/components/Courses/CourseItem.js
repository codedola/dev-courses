import React, { useState } from "react";
import { Rate, Tag, Button, Tooltip } from "antd";
import { EyeOutlined, PicRightOutlined, EditOutlined } from "@ant-design/icons";
import {
    CardStyled,
    WapperCardItem,
    ActionCard,
} from "../StyledComponent/Card.Styled";
import CourseInfoModal from "./CourseInfoModal";
export default function CourseItem({ course }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
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
            <CardStyled
                hoverable
                cover={<img alt={biDanh} src={hinhAnh} actions={[]} />}
            >
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
                <ActionCard>
                    <Button type='primary' className='add-cart' danger block>
                        <EditOutlined />
                        <span>Ghi danh</span>
                    </Button>
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
            </CardStyled>

            <CourseInfoModal
                course={course}
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
            />
        </WapperCardItem>
    );
}
