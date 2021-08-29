import styled from "styled-components";
import { Menu } from "antd";
/**
 * color: #08979c;
    background: #e6fffb;
    border-color: #87e8de;
 */
export const MenuStyled = styled(Menu)`
    .ant-menu-item {
        border-radius: 4px;
        min-height: 60px;
        .ant-menu-title-content,
        .ant-menu-title-content a,
        .ant-menu-item-selected a:hover {
            font-size: 14px;
            color: #08979c;
            font-weight: 600;
        }
        .anticon {
            font-size: 18px;
            color: #08979c;
            /* line-height: 50px; */
        }
        &::after {
            border-right: 4px solid #b0d9ffe8;
        }
        &:hover {
            background-color: #e6f7ff;
        }
    }
`;
