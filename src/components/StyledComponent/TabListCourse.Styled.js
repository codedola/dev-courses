import styled from "styled-components";
import { Tabs } from "antd";
import Carousel from "react-multi-carousel";

export const TabsStyled = styled(Tabs)`
    .ant-tabs-content-holder {
        min-height: 370px;
        /* border: 1px solid #dadada; */
        /* border-radius: 2px; */
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
