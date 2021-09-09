import styled from "styled-components";
import { Radio, Tag} from "antd";

export const InfoCourseUpload = styled.div`
    position: relative;
    svg {
        position: absolute;
        z-index: 2;
        width: 100px;
        height: 100px;
        left: 50%;
        top: 50%;
        transform: translate(-20%, -52%);
    }
    .course_upload {
        position: relative;
        display: flex;
        align-items: center;
        .ant-image {
            margin-right: 6px;
            img {
                height: 60px;
                width: 100px;
                object-fit: cover;
            }
        }

        .course_info {
            width: 100%;
            position: relative;
            /* display: flex; */
            /* flex-direction: column; */
            .title {
                margin-bottom: 0;
                font-size: 14px;
                color: #333;
                font-weight: 600;
                padding-right: 6px;
                cursor: pointer;
                display: -webkit-box !important;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
            }
            p {
                margin-bottom: 0;
                font-size: 14px;
                color: #9c9c9c;
                display: -webkit-box !important;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
            }
            .mark_loading {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ffffffd1;
               
            }
        }
    }
    
`
export const CourseStateUpload = styled(Tag)` 
    padding: 4px 20px;
    font-size: 14px;
`

export const WrapperTitleCourseUpload = styled.div`
    .ant-space {
        
        padding: 8px;
        /* background-color: #a2dafb;
        background-image: linear-gradient( 
        0deg, #a2dafb 0%, #9bf5eb 41%, #e8ffff 97% ); */
        border: 1px solid gray;
        border-radius: 6px;
        cursor: pointer;
        transition: all ease 0.2s;
        .ant-space-item {
            color: #6b6b6b;
            .anticon-medicine-box {
                font-size: 22px;
            }
            .title {
                font-weight: 600;
            }
        }
     
        /* &:hover {
               box-shadow: rgb(46 41 51 / 8%) 0px 2px 4px, rgb(71 63 79 / 16%) 0px 5px 10px;
        } */
    }
`

export const RadioAntStyled = styled(Radio)`
    align-items: center;
    .ant-radio {
        top: 0;
    }
    .ant-list-item {
        margin-bottom: 0px;
    }
`