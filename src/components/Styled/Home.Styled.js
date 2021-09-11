import styled from "styled-components";
import { Row, Alert } from "antd";
export const HomeContainer = styled.div`
    margin-top: 30px;
    /* width: 100%; */

    /* padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    @media only screen and (min-width: 768px) {
        max-width: 1200px;
    } */
`;

export const AlertStyled = styled(Alert)`
    /* margin-top: 10px; */
    /* margin-bottom: 10px; */
    padding-top: 18px;
    padding-bottom: 18px;
    .anticon {
        font-size: 18px;
    }

    .ant-alert-content {
        .ant-alert-message {
            color: #2c88f0;
            font-size: 16px;
        }
    }
`

export const RowTabsListCourse = styled(Row)`
    background-color: #ffffff;
    padding: 30px 8px;
    border-radius: 0px;
    /* box-shadow: rgb(60 64 67 / 10%) 0px 1px 2px 0px,
        rgb(60 64 67 / 10%) 0px 2px 2px 2px; */
            border: 1px solid #ebebeb;
`;

export const RowListCoursePaging = styled(Row)`
    background-color: #ffffff;
    padding: 30px 8px;
    border-radius: 0px;
    margin-left: 0;
    margin-right: 0;
    /* box-shadow: rgb(60 64 67 / 10%) 0px 1px 2px 0px,
        rgb(60 64 67 / 10%) 0px 2px 2px 2px; */
            border: 1px solid #ebebeb;
`;

export const BackgroundHome = styled.div`
    position: relative;

    .image_course {
        position: relative;
       
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .search_course {
        display: flex;
        flex-direction: column;
        position: absolute;
        background: #fff;
        box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
        padding: 20px;

        p {
            font-size: 16px;
        }
        //::after

        .ant-input-group-wrapper {
                border: 1px solid #585858;
                padding: 3px 0px 1px 0px;
            .ant-input-search-button{
                border: unset;
            }
        }
        
        @media only screen and (min-width: 768px) {
                left: 48px;
                top: 64px;
                max-width: 480px;
        }

        @media only screen and (max-width: 768px) {
            display: none;
        }
    }
`

export const CourseInfoHoveCard = styled.div`
    max-width: 360px;
padding: 10px;
    .name_course{
        font-size: 16px;
        font-weight: 600;
    }
    .description{
        display: -webkit-box!important;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        font-size: 14px;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .list_detail {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
            display: flex;
            align-items: flex-start;
            padding-top: 6px;
            padding-bottom: 6px;
             font-size: 14px;
            .anticon {
                margin-right: 10px;
                margin-top: 4px;
                color: green;
            }
        }
    }
    

`