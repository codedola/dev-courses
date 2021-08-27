import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    HomeContainer,
    RowTabsListCourse,
} from "../components/Styled/Home.Styled";
import { actGetListCourseAsync } from "../store/course/actions";
import { Col, Divider } from "antd";
import BackToTop from "../components/BackTop";
import TabListCourseCategory from "../components/TabListCourseCategory";
import PopularTopics from "../components/PopularTopics";
import LoadingPaging from "../components/Home/LoadingPaging";
import ListCourses from "../components/Home/ListCourses";
import usePagingCourse from "../utilities/hook/usePagingCourse";
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
            <RowTabsListCourse>
                <Col span={24} style={{ padding: "0 8px" }}>
                    <TabListCourseCategory />
                </Col>
            </RowTabsListCourse>

            <Divider />

            <PopularTopics />

            <Divider />

            <ListCourses listCourses={listCourses} />

            {loading ? <LoadingPaging /> : null}

            {currentPage !== totalPages ? renderButtonLoadMore() : null}

            <BackToTop />
        </HomeContainer>
    );
}
