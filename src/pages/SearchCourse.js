import React, { useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Col, Result } from "antd";
import CourseItem from "../components/Courses/CourseItem";
import LoadingPaging from "../components/Home/LoadingPaging";
import {
    HomeContainer,
    RowListCoursePaging,
} from "../components/Styled/Home.Styled";
import { actGetListCourseBySearchAsync } from "../store/course/actions";
import usePagingCourse from "../utilities/hook/usePagingCourse";
export default function SearchCourse() {
    const location = useLocation();
    const dispatch = useDispatch();
    const searchText = queryString.parse(location.search)?.q;
    const {
        listCourses,
        totalPages,
        currentPage,
        loading,
        totalCount,
        renderButtonLoadMore,
    } = usePagingCourse({ actAsync: actGetListCourseBySearchAsync });

    useEffect(
        function () {
            if (searchText) {
                dispatch(
                    actGetListCourseBySearchAsync({
                        tenKhoaHoc: searchText,
                    })
                );
            }
        },
        [searchText, dispatch]
    );
    return (
        <HomeContainer>
            <RowListCoursePaging
                gutter={[
                    { xs: 8, sm: 8, md: 16, lg: 24 },
                    { xs: 8, sm: 8, md: 16, lg: 24 },
                ]}
                style={{ marginLeft: 0, marginRight: 0 }}
            >
                <Col span={24}>
                    <Result
                        style={{ padding: 0 }}
                        status={listCourses.length === 0 ? "500" : "success"}
                        title={
                            listCourses.length !== 0
                                ? `Có ${totalCount} kết quả với "${searchText}"`
                                : `Không tìm thấy khóa học "${searchText}"`
                        }
                    />
                </Col>
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
        </HomeContainer>
    );
}
