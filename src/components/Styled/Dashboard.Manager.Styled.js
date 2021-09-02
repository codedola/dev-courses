import styled from "styled-components";
import { Space } from "antd";



export const SpaceFilterTypeCourse = styled(Space)`
    display: flex;
    justify-content: center;

    .item {
        font-size: 14px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        background-color: #fff;
        padding: 6px 16px;
        color: #656565;
        box-shadow:rgb(135 135 135 / 8%) 0px 2px 4px, rgb(119 119 119 / 3%) 0px 2px 10px;

        &.active {
            background-color: #a2dafb;
            background-image: linear-gradient( 
            0deg, #a2dafb 0%, #9bf5eb 41%, #ffffff 97% );
        }
        
        .anticon {
            font-size:20px;
            &:first-child {
                margin-right: 6px;
            }
           
        }
    }
`