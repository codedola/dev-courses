import styled from "styled-components";
import { Row, Alert } from "antd";
export const HomeContainer = styled.div`
    margin-top: 30px;
`;
export const ImgIntroduction = styled.div` 
    img {
        transition: all ease 0.2s;
        &:hover {
            transform: scale(1.02);
        }
    }
`
export const TopCompaniesStyled = styled.div` 
    .title {
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 28px;
        color: #17388e;
    }

    .companies {
        .ant-space {
            display: flex;
            justify-content: space-between;
            .ant-space-item {
                img {
                    transition: all ease 0.2s;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
`
export const CourseIntroductionList = styled.div` 
    p {
        font-size: 17px;
        color: #ffffff;
        display: inline-block;
        padding: 0px 10px;
        border-radius: 10px;
        background-color: #ffe228;
        background-image: linear-gradient(
    147deg, #ffe228 0%, #ff4747 74%);
    font-weight: 600;
        .anticon {
            color: #ffffff;
            font-size: 14px;
            margin-right: 6px;
        }
    }
`
export const CourseIntroductionHead = styled.div`

    .title_course {
        text-transform: uppercase;
        font-weight: 800;
        color: #d40066;
        margin-bottom: 20px;
    }
    

    .title_head{
        font-size: 24px;
        line-height: initial;
        color: #313131;
    }

    .description {
        font-size: 18px;
    }
`


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