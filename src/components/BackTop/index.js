import React from "react";
import { BackTop } from "antd";
import { ArrowUpOutlined, UpOutlined } from "@ant-design/icons";
import styled from "styled-components";

const BackTopStyled = styled(BackTop)`
    &.default {
        right: 50px;
        .icon_arrow {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            width: 60px;
            border-radius: 8px;
            background-color: #00000057;
            .anticon {
                font-size: 2.2rem;
                color: #ffffff;
            }
        }
    }

    &.small {
        right: 40px;
        .icon_arrow {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 42px;
            width: 42px;
            border-radius: 50%;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
                0 12px 20px rgba(0, 0, 0, 0.2);
            .anticon {
                font-size: 1.2rem;
                color: #000000;
            }
        }
    }
`;
export default function BackToTop({ size = "default", target = () => window }) {
    return (
        <BackTopStyled className={size} target={target}>
            <div className='icon_arrow'>
                {size === "default" ? <ArrowUpOutlined /> : <UpOutlined />}
            </div>
        </BackTopStyled>
    );
}
