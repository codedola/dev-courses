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
            height: 54px;
            width: 54px;
            /* border-radius: 8px; */
            /* background-color: #00000057; */
            border-radius: 50%;
             background-color: #ffffff;
            box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%),
            0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
            .anticon {
                /* font-size: 2.2rem; */
                /* color: #ffffff; */
                color: #7b7b7b;
                font-size: 1.6rem;
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
