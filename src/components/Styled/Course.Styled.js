import styled from "styled-components";
import { Modal } from "antd";

export const ModalCourseInfo = styled(Modal)`
    top: 20px;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
    .ant-modal-header {
        background-color: #e6f7ff;
        .ant-modal-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
        }
    }
    .ant-modal-body {
        padding-top: 12px;
    }

    .ant-modal-close {
        /* background-color: #000000ab;
        border-radius: 50%;
        right: -40px;
        top: -10px;
        @media only screen and (max-width: 768px) {
            right: -10px;
            top: -10px;
        } */
        .ant-modal-close-x {
            font-size: 20px;
            width: 56px;
            height: 56px;
            line-height: 56px;

            .anticon {
                vertical-align: middle;
                color: #c1c1c1;
            }
        }
    }
`;
