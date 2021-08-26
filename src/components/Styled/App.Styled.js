import styled from "styled-components";
import { Affix, Spin } from "antd";

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
