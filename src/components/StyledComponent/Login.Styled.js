import styled from "styled-components";
import { Row, Form, Button } from "antd";

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

export const FormItemStyled = styled(Form.Item)`
    .ant-input-affix-wrapper {
        padding: 12px 10px;
        border-radius: 10px;
        background: #f5f6f7;
        border-color: #dbdbdb;
        input {
            background: #f5f6f7;
        }
        &:hover,
        &:focus-visible,
        &:focus,
        &:active {
            /* box-shadow: 0 0 0 2px rgb(24 144 255 / 20%); */
            border-color: transparent;
            outline: #dbdbdb;
        }
    }
`;

export const ButtonSytled = styled(Button)`
    line-height: 1rem;
    border-radius: 10px;
    padding: 12px 32px;

    font-weight: 600;
    transition: unset;
`;

export const ButtonRegister = styled(Button)`
    line-height: 1rem;
    border-radius: 10px;
    padding: 12px 40px;

    font-weight: 600;
    transition: unset;
    background-color: #00a400;
    border-color: #00a400;
    color: #fff;

    &:hover,
    &:focus {
        background: linear-gradient(#79bc64, #578843);
        border-color: transparent;
    }
`;
