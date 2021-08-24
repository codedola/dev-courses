import React from "react";
import { Rate, Tag, Button, Tooltip } from "antd";
import { EyeOutlined, PicRightOutlined, EditOutlined } from "@ant-design/icons";
import {
    CardStyled,
    WapperCardItem,
    ActionCard,
} from "../StyledComponent/Card.Styled";
export default function CourseItem({ course }) {
    const { tenKhoaHoc, hinhAnh, biDanh, nguoiTao, danhMucKhoaHoc, luotXem } =
        course;

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
                <Tag color='orange'>
                    {danhMucKhoaHoc?.tenDanhMucKhoaHoc || "Coding"}
                </Tag>

                {/* action */}
                <ActionCard>
                    <Button
                        type='primary'
                        className='add-cart'
                        danger
                        block
                        size='large'
                    >
                        <EditOutlined /> Ghi danh
                    </Button>
                    <Tooltip placement='topRight' title={"Xem chi tiết"}>
                        <Button
                            type='default'
                            shape='circle'
                            size='large'
                            className='view-more'
                        >
                            <PicRightOutlined />
                        </Button>
                    </Tooltip>
                </ActionCard>
            </CardStyled>
        </WapperCardItem>
    );
}
