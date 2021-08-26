import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    HomeContainer,
    RowTabsListCourse,
    RowListCoursePaging,
} from "../components/Styled/Home.Styled";
import CourseItem from "../components/Courses/CourseItem";
import { actGetListCourseAsync } from "../store/course/actions";
import { Col, Divider } from "antd";
import BackToTop from "../components/BackTop";
import TabListCourseCategory from "../components/TabListCourseCategory";
import PopularTopics from "../components/PopularTopics";
import LoadingPaging from "../components/Home/LoadingPaging";
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

            <RowListCoursePaging
                gutter={[
                    { xs: 8, sm: 8, md: 16, lg: 24 },
                    { xs: 8, sm: 8, md: 16, lg: 24 },
                ]}
                style={{ marginLeft: 0, marginRight: 0 }}
            >
                {listCourses.length !== 0
                    ? listCourses.map(function (course, index) {
                          return (
                              <Col xs={12} md={8} lg={6} key={index}>
                                  <CourseItem course={course} />
                              </Col>
                          );
                      })
                    : null}
            </RowListCoursePaging>

            {loading ? <LoadingPaging /> : null}

            {currentPage !== totalPages ? renderButtonLoadMore() : null}

            <BackToTop />
        </HomeContainer>
    );
}
