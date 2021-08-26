import React, { useEffect, useState } from "react";
import { Row, Col, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import "react-multi-carousel/lib/styles.css";
import { CarouselStyled } from "../Styled/TabListCourse.Styled";
import { actGetListCourseByCategoryAsync } from "../../store/course/actions";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1200, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 375 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 375, min: 0 },
        items: 1,
    },
};
export default function CourseListCategories({ keyCategory }) {
    const dispatch = useDispatch();
    const [cateEmpty, setCateEmpty] = useState("");
    const hashCourse = useSelector(
        (state) => state.Courses.HashCourseCategories
    );
    useEffect(
        function () {
            if (cateEmpty === keyCategory) return;
            if (!hashCourse[keyCategory]) {
                dispatch(actGetListCourseByCategoryAsync(keyCategory)).then(
                    function (res) {
                        if (!res.ok) {
                            setCateEmpty(keyCategory);
                        }
                    }
                );
            }
        },
        [keyCategory, dispatch, hashCourse, cateEmpty]
    );
    return (
        <Row justify={cateEmpty === keyCategory && "center"}>
            <Col span={24}>
                {hashCourse[keyCategory] ? (
                    <CarouselStyled responsive={responsive}>
                        {hashCourse[keyCategory].map(function (course, index) {
                            return <CourseItem course={course} key={index} />;
                        })}
                    </CarouselStyled>
                ) : null}
            </Col>

            {cateEmpty === keyCategory ? (
                <Empty
                    description='Không tìm thấy khóa học !'
                    imageStyle={{ minHeight: 200 }}
                />
            ) : null}
        </Row>
    );
}
