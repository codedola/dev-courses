import React from "react";
import { Button, Tooltip } from "antd";
import { EditOutlined, PicRightOutlined } from "@ant-design/icons";
import { ActionCard } from "../Styled/Card.Styled";
export default function CourseItemAction({ showModal }) {
    return (
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
    );
}
