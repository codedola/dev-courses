import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { ButtonLoadMore } from "../../components/Styled/App.Styled";
export default function usePagingCourse({
    actAsync = () => {},
    restParams = {},
}) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const PagingCourse = useSelector((state) => state.Courses.PagingCourse);
    const listCourses = PagingCourse.list;
    const currentPage = PagingCourse.currentPage;
    const totalPages = PagingCourse.totalPages;
    const totalCount = PagingCourse.totalCount;

    function handleLoadMoreCourses() {
        setLoading(true);
        dispatch(
            actAsync({
                page: currentPage + 1,
                ...restParams,
            })
        ).then(function () {
            setLoading(false);
        });
    }

    function renderButtonLoadMore() {
        return (
            <Row>
                <Col
                    span={24}
                    style={{
                        marginTop: 30,
                        marginBottom: 30,
                        textAlign: "center",
                    }}
                >
                    <ButtonLoadMore
                        size='large'
                        onClick={handleLoadMoreCourses}
                    >
                        {loading ? "Đang tải..." : "Tải thêm"}
                    </ButtonLoadMore>
                </Col>
            </Row>
        );
    }

    return {
        renderButtonLoadMore,
        listCourses,
        totalPages,
        currentPage,
        loading,
        totalCount,
    };
}
