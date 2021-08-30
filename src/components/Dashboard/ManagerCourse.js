import React from "react";
import AVATAR from "../../assets/images/avatar1.jpg";
import { Row, Col, Descriptions, Button, Space, Image } from "antd";
import CourseItem from "../Courses/CourseItem";
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
                <Space>
                    <Image width={120} src={AVATAR} />
                    <Descriptions
                        title='Nguyen Van A'
                        size='small'
                        extra={<Button type='default'>Chỉnh sửa</Button>}
                    >
                        <Descriptions.Item label='Product'>
                            Cloud Database
                        </Descriptions.Item>
                        <Descriptions.Item label='Billing'>
                            Prepaid
                        </Descriptions.Item>
                        <Descriptions.Item label='time'>
                            18:00:00
                        </Descriptions.Item>
                        <Descriptions.Item label='Amount'>
                            $80.00
                        </Descriptions.Item>
                        <Descriptions.Item label='Discount'>
                            $20.00
                        </Descriptions.Item>
                        <Descriptions.Item label='Official'>
                            $60.00
                        </Descriptions.Item>
                    </Descriptions>
                </Space>
            </Col>
            <Col span={24}>
                <RowManagerUserInfo>
                    {listRegisterCourses &&
                        listRegisterCourses.map(function (course, index) {
                            const courseInfo = hashListCourse[course.maKhoaHoc];
                            return (
                                <Col span={8} key={index}>
                                    <CourseItem course={courseInfo} />
                                </Col>
                            );
                        })}
                </RowManagerUserInfo>
            </Col>
        </RowManagerUserInfo>
    );
}
