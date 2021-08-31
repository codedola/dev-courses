import styled from "styled-components";
import { Modal } from "antd";

export const ModalCourseInfo = styled(Modal)`
    top: 20px;

    &.user_edit {
        transition: unset;
        .ant-modal-body {
            padding: 24px;
        }
        .ant-modal-content {
            border-radius: 4px;
            .ant-modal-header {
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
        }
    }

    .ant-modal-content {
        border-radius: 10px;
        .ant-modal-header {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
    .ant-modal-header {
        /* background-color: #e6f7ff; */
        background-color: #a2dafb;
        background-image: linear-gradient(
            0deg,
            #bee5fd 0%,
            #c0fbf4 41%,
            #ffffff 97%
        );

        .ant-modal-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #7e7e7f;
        }
    }
    .ant-modal-body {
        padding-top: 12px;
    }

    .ant-modal-close {
        .ant-modal-close-x {
            font-size: 20px;
            width: 56px;
            height: 56px;
            line-height: 56px;

            .anticon {
                line-height: 26px;
                vertical-align: middle;
                color: #9e9e9e;
            }
        }
    }

    .Information {
        .state {
            .state_space {
                .rate {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: wrap-reverse;
                    cursor: auto;
                    .star {
                        display: flex;
                        align-items: baseline;
                        .num_star {
                            margin-right: 6px;
                            font-weight: 600;
                            color: #b4690e;
                            font-size: 1rem;
                        }
                        ul {
                            display: flex;
                            justify-content: flex-start;
                            .ant-rate-star {
                                margin-right: 2px;
                            }
                            .ant-rate-star-half,
                            .ant-rate-star-full {
                                color: #e59819;
                            }
                            li {
                                font-size: 18px;
                            }
                        }
                    }

                    .students {
                        font-size: 14px;
                    }
                }
            }
        }
    }
`;
