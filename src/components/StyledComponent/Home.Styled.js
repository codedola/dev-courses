import styled from "styled-components";
import { Row } from "antd";
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

export const RowTabsListCourse = styled(Row)`
    background-color: #ffffff;
    padding: 30px 8px;
    border-radius: 8px;
    box-shadow: rgb(60 64 67 / 10%) 0px 1px 2px 0px,
        rgb(60 64 67 / 15%) 0px 2px 6px 2px;
`;

export const RowListCoursePaging = styled(Row)`
    background-color: #ffffff;
    padding: 30px 8px;
    border-radius: 8px;
    margin-left: 0;
    margin-right: 0;
    box-shadow: rgb(60 64 67 / 10%) 0px 1px 2px 0px,
        rgb(60 64 67 / 15%) 0px 2px 6px 2px;
`;
