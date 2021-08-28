import styled from "styled-components";
import { Modal } from "antd";

export const ModalCourseInfo = styled(Modal)`
    top: 20px;

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
