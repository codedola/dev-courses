import styled from "styled-components";
import { Affix, Spin, Button } from "antd";

export const ContentApp = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    @media only screen and (min-width: 768px) {
        max-width: 1200px;
    }
`;
export const WapperApp = styled.div`
    height: 100vh;
`;
export const ContainerApp = styled.div`
    background-color: #ffffff;
    height: 100%;
`;

export const AffixStyled = styled(Affix)`
    .ant-affix {
        z-index: 1001;
    }
`;

export const SpacingStyled = styled.div`
    padding-top: ${(props) => props.sizeSpacing || "20px"};
    padding-bottom: ${(props) => props.sizeSpacing || "20px"};
`;

export const SpinStyled = styled(Spin)`
    .ant-spin-dot {
        .ant-spin-dot-item {
            background-color: #929292;
        }
    }
`;

export const ButtonLoadMore = styled(Button)`
    min-width: 180px;
    border-radius: 10px;
    height: auto;
    span {
        font-size: 1.2rem;
        color: #444444;
    }
    transition: all 0.2s;
    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
        border-color: #d9d9d9;
        outline: unset;
    }
    &:hover {
        box-shadow: rgb(60 64 67 / 10%) 0px 1px 2px 0px,
            rgb(60 64 67 / 15%) 0px 2px 6px 2px;
    }
`;
