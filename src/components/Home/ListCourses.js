import React from "react";
import { Col } from "antd";
import CourseItem from "../Courses/CourseItem";
import { RowListCoursePaging } from "../Styled/Home.Styled";
export default function ListCourses({ listCourses }) {
    return (
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
    );
}
