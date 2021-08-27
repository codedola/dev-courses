import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Affix, Result, Row } from "antd";
import LoadingPaging from "../components/Home/LoadingPaging";
import { HomeContainer } from "../components/Styled/Home.Styled";
import { ColResult } from "../components/Styled/Search.Styled";
import { SpinStyled } from "../components/Styled/App.Styled";
import { actGetListCourseBySearchAsync } from "../store/course/actions";
import usePagingCourse from "../utilities/hook/usePagingCourse";
import ListCourses from "../components/Home/ListCourses";
export default function SearchCourse() {
    const location = useLocation();
    const dispatch = useDispatch();
    const [loadingFirst, setLoadingFirst] = useState(false);
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
                setLoadingFirst(true);
                dispatch(
                    actGetListCourseBySearchAsync({
                        tenKhoaHoc: searchText,
                    })
                ).finally(function () {
                    setLoadingFirst(false);
                });
            }
        },
        [searchText, dispatch]
    );
    return (
        <HomeContainer style={{ marginTop: 10 }}>
            <SpinStyled spinning={loadingFirst} size='large'>
                <Row style={{ paddingBottom: 10 }}>
                    <ColResult span={24}>
                        <Affix>
                            <Result
                                status={
                                    listCourses.length === 0 ? "500" : "success"
                                }
                                title={
                                    listCourses.length !== 0
                                        ? `Có ${totalCount} kết quả với "${searchText}"`
                                        : `Không tìm thấy khóa học "${searchText}"`
                                }
                            />
                        </Affix>
                    </ColResult>
                </Row>

                <ListCourses listCourses={listCourses} />
            </SpinStyled>
            {loading ? <LoadingPaging /> : null}
            {currentPage !== totalPages ? renderButtonLoadMore() : null}
        </HomeContainer>
    );
}
