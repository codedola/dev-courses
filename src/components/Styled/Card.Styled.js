import styled from "styled-components";
import { Card, Space } from "antd";

export const WapperCardItem = styled.div`
    padding: 8px;
`;
export const SpaceCategoryAndPrice = styled(Space)`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    .ant-space-item {
        font-weight: 600;
    }
    .category {
        border-radius: 2px;
        cursor: auto;
        font-weight: 600;
        border-radius: 0px;
        letter-spacing: -0.6px;
        
        //
        color: #8c4400;
        background: #fff3d9;
        border-color: transparent;
    }

    .price {
        .pay {
            text-decoration: line-through;
            color: #6a6f73;
            font-weight: 400;
            font-size: 13px;
        }
        .free {
            color: #149243;
            font-size: 15px;
            margin-right: 6px;
            letter-spacing: -0.8px;
            /* text-shadow: 1px 1px 8px #b4ffd1; */
        }
    }
`
export const ActionCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 10px;
    .add-cart {
        border-radius: 2px;
        border-color: transparent;
        background: #ffd4d447; //#ffd4d447
        color: #d42020;
        font-weight: 400;
        &:hover {
            border-color: transparent;
            background: #ffd4d447;
            color: #e03e3e;
        }
    }

    .add-cart.register {
        /* background: #52c41a;
        border-color: #52c41a;
        cursor: auto; */
        background: #bdff9d3b;
        border-color: transparent;
        cursor: auto;
        color: #06ad06;
        
    }

    .view-more {
        margin-left: 8px;
        border-color: transparent;
        background: #e6e6e64d;
        .anticon {
            font-size: 20px;
            margin-top: 2px;
            color: gray;
        }
    }
`;

export const CardStyled = styled(Card)`
    /* box-shadow: 0 1px 4px #00000033; */
    border-radius: 2px;

    overflow: hidden;
    transition: all ease 0.2s;
    &:hover {
        /* box-shadow: 0 1px 4px #00000033; */
        box-shadow: 0 2px 6px 0 rgb(210 210 210 / 30%);
        transform: scale(1.02);
      
    }
    &.ant-card-bordered {
        border: unset;
    }
    .ant-card-cover {
        cursor: auto;
        padding: 4px 4px 0px 4px;
        img {
            min-width: 0;
            height: 160px;
            object-fit: fill;
        }
    }

    .ant-card-body {
        /* padding: 8px 8px 12px 8px; */
        padding: 8px;
        cursor: auto;
        .title {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0px;
            font-weight: 700;
            letter-spacing: -0.4px;
            cursor: pointer;
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
                    color: #8c4400;
                    font-size: 14px;
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
                        font-size: 14px;
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

        .action_creation {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
            .ant-space-item:first-child {
                flex-grow: 1;
            }
            .view_detail {
                border: unset;
                background-color: #efefef;
                font-weight: 600;
                color: #727272;
            }


            .delete_course, .upload_course {
               cursor: pointer;
                .anticon {
                    font-size: 28px;
                    color: #bcbcbc;
                    &:hover {
                        color: #ff8080;
                    }
                }
            }

            .upload_course {
                .anticon {
                    &:hover {color: #24b2d8; }
                    
                }
            }
        }
    }
`;
