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
   
    &.add_new-user {
        padding: 0px;
        border-radius:0px;
        box-shadow: unset;
        .ant-input-affix-wrapper {
            border-radius: 0;
        }

        .ant-form-item{
            margin-bottom: 36px;
        }
    }
    
    &.user_edit {
        padding: 0;
        border-radius: 0;
        box-shadow: unset;
        .ant-form-item {
            margin-bottom: 20px;
            .ant-input-affix-wrapper {
                border-radius: 4px;
            }
        }
    }
    .ant-input-prefix {
        .anticon {
            color: gray;
            margin-right: 2px;
        }
    }
`;

export const FormItemStyled = styled(Form.Item)`
    margin-bottom: 8px;
    .ant-form-item-extra {
        padding-left: 2px;
    }
    .ant-input-affix-wrapper {
        padding: 10px;
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

            border-color: #dbdbdb;
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
    &.btn_edit {
        border-radius: 4px;
    }
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
