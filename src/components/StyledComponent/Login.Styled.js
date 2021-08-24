import styled from "styled-components";
import { Row, Form } from "antd";

// helper
export const SpacingStyled = styled.div`
    padding-top: ${(props) => props.sizeSpacing || "20px"};
    padding-bottom: ${(props) => props.sizeSpacing || "20px"};
`;
//
export const RowLoginStyled = styled(Row)``;

export const LoginStyled = styled.div``;
export const FormStyled = styled(Form)`
    padding: 54px 30px 30px;
    border-radius: 8px;
    box-shadow: rgb(60 64 67 / 10%) 0px 1px 2px 0px,
        rgb(60 64 67 / 15%) 0px 2px 8px 2px;

    .ant-input-prefix {
        .anticon {
            color: gray;
            margin-right: 2px;
        }
    }
`;
