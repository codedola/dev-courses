import React from "react";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import styled from "styled-components";

const BackTopStyled = styled(BackTop)`
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
`;
export default function BackToTop() {
    return (
        <BackTopStyled>
            <div className='icon_arrow'>
                <ArrowUpOutlined />
            </div>
        </BackTopStyled>
    );
}
