import styled from "styled-components";
import { Menu, Button, Row } from "antd";

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

// Management Category
export const ItemIconStyled = styled.div`
    box-sizing: border-box;
    padding: 4px 2px;
    background-color: #ffffff;

    background-color: #a2dafb;
    background-image: linear-gradient(
        0deg,
        #a2dafb 0%,
        #9bf5eb 41%,
        #ffffff 97%
    );

    /*  */
    border-radius: 6px;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    /* margin-bottom: 8px; */
    transition: all 200ms ease 0s;
    box-shadow: 0 2px 8px #f0f1f2;
    &:hover {
        transform: translateY(-0.25rem);
        box-shadow: rgb(46 41 51 / 8%) 0px 2px 4px,
            rgb(71 63 79 / 16%) 0px 5px 10px;

        /* box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%),
            0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%); */
    }
    svg {
        width: 40px;
        height: 40px;
    }
`;

export const ButtonSearchTashbar = styled(Button)`
    color: #0909094f;
    border: 1px solid transparent;
    background-color: #ffffff8c;
    border-radius: 8px;
    font-size: 12px;
    &:hover,
    &:active,
    &:focus {
        color: #0909094f;
        border: 1px solid transparent;
        background-color: #ffffff8c;
    }
`;

export const RowManagerCategoryUser = styled(Row)`
    height: 100vh;
    overflow-y: scroll;
`;
export const RowManagerCategory = styled(Row)`
    padding: 10px;
    background: rgb(248 248 248);
    border-radius: 10px;
`;

export const RowManagerUser = styled(Row)`
    padding: 10px;
    background: rgb(248 248 248);
    border-radius: 10px;

    .tool {
        background: rgb(248 248 248);
        cursor: auto;
        .ant-input-affix-wrapper {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding-top: 6px;
            padding-bottom: 6px;
            .ant-input-prefix {
                color: #e0e0e0;
                margin-right: 6px;
            }
            .ant-input {
                color: #757575;
            }
        }
        .anticon-sort-ascending,
        .anticon-sort-descending {
            display: block;
            cursor: pointer;
            padding: 6px 12px;
            border-radius: 8px;
            color: #989898;
            background: #00000005;
            font-size: 18px;
            &:hover {
                background: rgb(251 251 251);
            }
        }
    }
`;
