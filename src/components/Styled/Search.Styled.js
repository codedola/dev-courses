import styled from "styled-components";
import { Result } from "antd";

export const ResultStyled = styled(Result)`
    padding: 0;
    background-color: #ffffffcf;
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
