import styled from "styled-components";
import { Card } from "antd";

export const WapperCardItem = styled.div`
    padding: 8px;
`;
export const ActionCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 10px;
    .add-cart {
        border-radius: 6px;
    }

    .add-cart.register {
        background: #52c41a;
        border-color: #52c41a;
        cursor: auto;
    }

    .view-more {
        margin-left: 8px;
    }
`;

export const CardStyled = styled(Card)`
    box-shadow: 0 1px 4px #00000033;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.2s;
    &:hover {
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);
        transform: scale(1.05);
    }
    &.ant-card-bordered {
        border: unset;
    }
    .ant-card-cover {
        cursor: auto;
        img {
            min-width: 0;
            height: 160px;
            object-fit: fill;
        }
    }

    .ant-card-body {
        padding: 8px 8px 12px 8px;
        cursor: auto;
        .title {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            font-weight: 700;
            letter-spacing: -0.4px;
            cursor: pointer;
        }

        .ant-tag {
            margin-top: 10px;
            /* padding: 2px 8px; */
            border-radius: 2px;
            cursor: auto;
        }

        .author {
            color: #6a6f73;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 6px;
        }

        .rate {
            display: flex;
            justify-content: space-between;
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
                }
            }

            .view {
                color: gray;
                .anticon {
                    margin-right: 2px;
                    font-size: 1rem;
                }
            }
        }
    }
`;
