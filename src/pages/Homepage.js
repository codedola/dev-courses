import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    HomeContainer,
    RowTabsListCourse,
    RowListCoursePaging,
} from "../components/StyledComponent/Home.Styled";
import CourseItem from "../components/Courses/CourseItem";
import { actGetListCourseAsync } from "../store/course/actions";
import { Row, Col, Button, Divider } from "antd";
import BackToTop from "../components/BackTop";
import CourseItemSkeleton from "../components/Courses/CourseItemSkeleton";
import TabListCourseCategory from "../components/TabListCourseCategory";
import PopularTopics from "../components/PopularTopics";
export default function Homepage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const PagingCourse = useSelector((state) => state.Courses.PagingCourse);
    const listCourses = PagingCourse.list;
    const currentPage = PagingCourse.currentPage;
    const totalPages = PagingCourse.totalPages;

    useEffect(
        function () {
            dispatch(actGetListCourseAsync());
        },
        [dispatch]
    );

    function handleLoadMoreCourses() {
        setLoading(true);
        dispatch(
            actGetListCourseAsync({
                page: currentPage + 1,
            })
        ).then(function () {
            setLoading(false);
        });
    }
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

            {loading ? (
                <RowListCoursePaging gutter={[24, 32]}>
                    <Col xs={12} md={8} lg={6}>
                        <CourseItemSkeleton />
                    </Col>
                    <Col xs={12} md={8} lg={6}>
                        <CourseItemSkeleton />
                    </Col>
                    <Col xs={12} md={8} lg={6}>
                        <CourseItemSkeleton />
                    </Col>
                    <Col xs={12} md={8} lg={6}>
                        <CourseItemSkeleton />
                    </Col>
                </RowListCoursePaging>
            ) : null}
            {currentPage !== totalPages ? (
                <Row>
                    <Col
                        span={24}
                        style={{
                            marginTop: 30,
                            marginBottom: 30,
                            textAlign: "center",
                        }}
                    >
                        <Button
                            type='default'
                            size='large'
                            shape='round'
                            onClick={handleLoadMoreCourses}
                        >
                            {loading ? "Đang tải..." : "Tải thêm"}
                        </Button>
                    </Col>
                </Row>
            ) : null}

            <BackToTop />
        </HomeContainer>
    );
}
