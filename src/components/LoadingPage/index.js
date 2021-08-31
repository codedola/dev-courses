import React from "react";
import styled from "styled-components";

//
const LoadingContainer = styled.div`
    display: ${(props) => (!props.isLoading ? "none" : "block")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffffb8;
    z-index: 1031;
`;

const SVGStyled = styled.svg`
    width: 150px;
    height: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -70%);
`;
export default function LoadingPage({ isLoading }) {
    return (
        <LoadingContainer isLoading={isLoading}>
            <SVGStyled
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                style={{ margin: "auto", display: "block" }}
                viewBox='0 0 100 100'
                preserveAspectRatio='xMidYMid'
            >
                <circle
                    cx={50}
                    cy={50}
                    r={30}
                    stroke='#46dff0'
                    strokeWidth={16}
                    fill='none'
                />
                <circle
                    cx={50}
                    cy={50}
                    r={30}
                    stroke='#ffffff'
                    strokeWidth={10}
                    strokeLinecap='round'
                    fill='none'
                >
                    <animateTransform
                        attributeName='transform'
                        type='rotate'
                        repeatCount='indefinite'
                        dur='0.5s'
                        values='0 50 50;180 50 50;720 50 50'
                        keyTimes='0;0.5;1'
                    />
                    <animate
                        attributeName='stroke-dasharray'
                        repeatCount='indefinite'
                        dur='0.5s'
                        values='18.84955592153876 169.64600329384882;118.75220230569417 69.7433569096934;18.84955592153876 169.64600329384882'
                        keyTimes='0;0.5;1'
                    />
                </circle>
            </SVGStyled>
        </LoadingContainer>
    );
}
