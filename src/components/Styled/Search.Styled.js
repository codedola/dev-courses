import styled from "styled-components";
import { Result, Col } from "antd";

export const ResultStyled = styled(Result)`
    padding: 0;
    background-color: #ffffffe3;
    .ant-result-icon {
        margin-bottom: 4px;
        .anticon {
            font-size: 56px;
        }
    }
    .ant-result-title {
        font-size: 18px;
        font-weight: 600;
        color: #6b6b6b;
    }
`;

export const ColResult = styled(Col)`
    .ant-result {
        padding: 0;
        background-color: #fffffff0;
        .ant-result-icon {
            margin-bottom: 2px;
            .anticon {
                font-size: 54px;
            }
        }
        .ant-result-title {
            font-size: 18px;
            font-weight: 600;
            color: #6b6b6b;
        }
    }
`;
