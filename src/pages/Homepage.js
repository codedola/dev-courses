import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    AlertStyled,
    HomeContainer,
    RowTabsListCourse,
} from "../components/Styled/Home.Styled";
import {SpacingStyled } from "../components/Styled/App.Styled"
import { actGetListCourseAsync } from "../store/course/actions";
import { Col, Affix } from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons"
import BackToTop from "../components/BackTop";
import TabListCourseCategory from "../components/TabListCourseCategory";
import PopularTopics from "../components/PopularTopics";
import LoadingPaging from "../components/Home/LoadingPaging";
import ListCourses from "../components/Home/ListCourses";
import usePagingCourse from "../utilities/hook/usePagingCourse";
import BackgroupHome from "../components/Home/BackgroupHome";
import TopCompanies from "../components/Home/TopCompanies";
import IntroductionCourses from "../components/Home/IntroductionCourses";
export default function Homepage() {
    const dispatch = useDispatch();
    const {
        listCourses,
        totalPages,
        currentPage,
        loading,
        renderButtonLoadMore,
    } = usePagingCourse({ actAsync: actGetListCourseAsync });

    useEffect(
        function () {
            dispatch(actGetListCourseAsync());
        },
        [dispatch]
    );

    return (
        <HomeContainer>
            
            <BackgroupHome />
            
            <SpacingStyled sizeSpacing="30px"/>
            
            <RowTabsListCourse>
                <Col span={24} style={{ padding: "0 8px" }}>
                    <TabListCourseCategory />
                </Col>
            </RowTabsListCourse>

            <SpacingStyled  sizeSpacing="30px" />

            <PopularTopics />

            <SpacingStyled sizeSpacing="30px"/>

            <TopCompanies />

            <SpacingStyled sizeSpacing="40px" />
            
            <IntroductionCourses />
            
            <SpacingStyled  sizeSpacing="30px"/>
            
            {/* List Course Paging */}
            <Affix offsetTop={0}>
                <AlertStyled
                    type="info"
                    showIcon
                    icon={<ExclamationCircleOutlined />}
                    banner={true}
                    message="Do ảnh hưởng của dịch Covid-19, DevCourse miễn phí tất cả các khóa học !"
                />
            </Affix>
            
            <ListCourses listCourses={listCourses} />

            {loading ? <LoadingPaging /> : null}

            {currentPage !== totalPages ? renderButtonLoadMore() : null}

         
            <BackToTop />
        </HomeContainer>
    );
}
