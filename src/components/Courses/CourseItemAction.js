import React from "react";
import { Button, Tooltip } from "antd";
import {
    EditOutlined,
    PicRightOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";
import { ActionCard } from "../Styled/Card.Styled";
export default function CourseItemAction({ showModal, isRegister }) {
    return (
        <ActionCard>
            {isRegister ? (
                <Button type='primary' className='add-cart register' block>
                    <CheckCircleOutlined />
                    <span>Đã đăng ký</span>
                </Button>
            ) : (
                <Button type='primary' className='add-cart' danger block>
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
