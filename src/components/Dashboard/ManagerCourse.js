import React from "react";
import { Row, Col } from "antd";
import CourseItemDashboard from "../Courses/CourseItemDashboard";
import UserDescription from "../UserDescription";
import { RowManagerUserInfo } from "../Styled/Dashboard.Styled";
import { useSelector } from "react-redux";

export default function ManagerCourse() {
    const hashListCourse = useSelector(
        (state) => state.Courses.hashListCourseAll
    );
    const currentUser = useSelector((state) => state.Auths.currentUser);
    const listRegisterCourses = currentUser?.chiTietKhoaHocGhiDanh;

    return (
        <RowManagerUserInfo gutter={[16, 16]}>
            <Col span={24}>
                <UserDescription />
            </Col>
            <Col span={24} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
                    {listRegisterCourses &&
                        listRegisterCourses.map(function (course, index) {
                            const courseInfo = hashListCourse[course.maKhoaHoc];
                            return (
                                <Col span={8} key={index}>
                                    <CourseItemDashboard course={courseInfo} />
                                </Col>
                            );
                        })}
                </Row>
            </Col>
        </RowManagerUserInfo>
    );
}
