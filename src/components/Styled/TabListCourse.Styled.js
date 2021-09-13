import styled from "styled-components";
import { Tabs } from "antd";
import Carousel from "react-multi-carousel";

export const TabsStyled = styled(Tabs)`
    .ant-tabs-nav {
        padding: 0px 16px;
        &::before {
            border-bottom: none;
        }
        .ant-tabs-nav-wrap {
            .ant-tabs-nav-list {
                padding-left: 2px;
                padding-right: 2px;

                .ant-tabs-tab {
                    transition: unset;
                    background: #f3f3f3;
                    color: #a4a4a4;
                    border-radius: 4px;
                    margin-right: 10px;
                    border-color: #fff;
                    &:hover {
                        /* transform: scale(1.02); */
                        background: #ececec;
                    }
                    .ant-tabs-tab-btn {
                        &:focus {
                            color:#fff;
                            
                        }
                    }
                    &.ant-tabs-tab-active {
                        background-color: #0093E9;
                        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
                        color: #fff;
                        .ant-tabs-tab-btn {
                            color: #fff;
                        }
                    }

                }
            }
        }
    }
    .ant-tabs-content-holder {
        min-height: 370px;
    }
    @media only screen and (min-width: 768px) {
    }

    @media only screen and (max-width: 768px) {
        .ant-tabs-nav {

            .ant-tabs-nav-operations {
                display: none;
            }
        }
    }
`;

export const CarouselStyled = styled(Carousel)`
    .react-multi-carousel-track {
        .react-multi-carousel-item {
            padding: 8px;
            @media only screen and (max-width: 1024px) {
                padding: 2px;
            }
            @media only screen and (max-width: 768px) {
                padding: 0px;
            }
        }
    }
`;
