import styled from "styled-components";
import { Card } from "antd";

export const CardPopularTopics = styled(Card)`
    /* box-shadow: rgb(60 64 67 / 10%) 0px 1px 2px 0px,
        rgb(60 64 67 / 10%) 0px 2px 6px 2px; */
    .ant-card-head {
        padding: 0 24px 0 0;
        .ant-card-head-wrapper {
            .ant-card-head-title {
                font-size: 1.4rem;
                font-weight: 600;
                color: #333;
            }
        }
    }

    .ant-card-body {
        box-shadow: rgb(110 113 114 / 10%) 0px 1px 2px 0px,
            rgb(135 138 140 / 10%) 0px 2px 6px 2px;

        /* background-color: #ffdee9;
        background-image: linear-gradient(0deg, #ffe3ec 0%, #c3fffc 100%); */
        .ant-card-grid {
            cursor: pointer;
            font-weight: 600;
            color: #8c8c8c;
        }
    }
`;
