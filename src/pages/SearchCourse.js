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
    const [searchText, setSearchText] = useState("");
    const [loadingFirst, setLoadingFirst] = useState(false);

    useEffect(
        function () {
            const cpp = location?.search.includes("++");
            if (cpp) {
                setSearchText(location?.search?.split("=")[1]);
            } else {
                setSearchText(queryString.parse(location.search)?.q);
            }
        },
        [location]
    );
    const {
        listCourses,
        totalPages,
        currentPage,
        loading,
        totalCount,
        renderButtonLoadMore,
    } = usePagingCourse({ actAsync: actGetListCourseBySearchAsync, restParams: {tenKhoaHoc: searchText} });

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
                                        ? `C?? ${totalCount} k???t qu??? v???i "${searchText}"`
                                        : `Kh??ng t??m th???y kh??a h???c "${searchText}"`
                                }
                            />
                        </Affix>
                    </ColResult>
                </Row>

                {listCourses?.length !== 0 ? (
                    <ListCourses listCourses={listCourses} />
                ) : null}
            </SpinStyled>
            {loading ? <LoadingPaging /> : null}
            {currentPage !== totalPages ? renderButtonLoadMore() : null}
        </HomeContainer>
    );
}
