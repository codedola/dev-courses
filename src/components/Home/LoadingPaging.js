import React from "react";
import { Col } from "antd";
import { RowListCoursePaging } from "../Styled/Home.Styled";
import CourseItemSkeleton from "../Courses/CourseItemSkeleton";
export default function LoadingPaging() {
    return (
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
    );
}
