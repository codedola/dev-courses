import React from "react";
import { Badge, Popover, List, Image, Empty, Input, Space } from "antd";
import {
    CarOutlined,
    SearchOutlined,
    SortAscendingOutlined,
    SortDescendingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListMyCoursesHeader, EmptyMyCourse } from "../Styled/Header.Styled";

export default function HeaderMyCourse() {
    const hashCourses = useSelector((state) => state.Courses.hashListCourseAll);
    //
    const currentUser = useSelector((state) => state.Auths.currentUser);
    const listCourseRegister = currentUser?.chiTietKhoaHocGhiDanh;
    const countMyCourses = listCourseRegister?.length;

    //
    const onChange = (e) => console.log(e.target.value);

    return (
        <Popover
            placement='bottom'
            trigger='click'
            content={
                <ListMyCoursesHeader itemLayout='horizontal'>
                    <List.Item className='tool'>
                        <Space size='middle'>
                            <Input
                                placeholder='Search course...'
                                bordered={false}
                                prefix={<SearchOutlined />}
                                onChange={onChange}
                            />
                            <SortAscendingOutlined />
                            <SortDescendingOutlined />
                        </Space>
                    </List.Item>
                    {listCourseRegister && countMyCourses !== 0 ? (
                        listCourseRegister.map((item, index) => {
                            const course = hashCourses[item.maKhoaHoc];
                            return (
                                <List.Item key={index}>
                                    <Image
                                        preview={false}
                                        src={course?.hinhAnh}
                                    />
                                    <div className='course_info'>
                                        <h3 className='title'>
                                            {course?.tenKhoaHoc} margin-bottom
                                        </h3>
                                        <p className='description'>
                                            {course?.moTa}
                                        </p>
                                    </div>
                                </List.Item>
                            );
                        })
                    ) : (
                        <List.Item style={{ borderBottom: "none" }}>
                            <EmptyMyCourse
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description='Bạn chưa đăng ký khóa học'
                            />
                        </List.Item>
                    )}
                    {/*  */}
                    {!(
                        !currentUser ||
                        listCourseRegister ||
                        countMyCourses < 5
                    ) ? (
                        <List.Item className='load_more'>
                            <Link to='/my-course'>Xem Thêm</Link>
                        </List.Item>
                    ) : null}
                </ListMyCoursesHeader>
            }
        >
            <Link to='/my-courses' className='cart'>
                <Badge count={countMyCourses || 0} showZero>
                    <CarOutlined />
                </Badge>
            </Link>
        </Popover>
    );
}
