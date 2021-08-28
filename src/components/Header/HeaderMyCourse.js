import React, { useMemo, useState } from "react";
import { Badge, Popover, List, Image, Empty, Input, Space } from "antd";
import {
    CarOutlined,
    SearchOutlined,
    SortAscendingOutlined,
    SortDescendingOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
import {
    ListMyCoursesHeader,
    EmptyMyCourse,
    ListHandleRegisterCourse,
} from "../Styled/Header.Styled";

export default function HeaderMyCourse() {
    const [orderDir, setOrderDir] = useState(""); //desc | asc
    const [searchText, setSearchText] = useState("");
    const hashCourses = useSelector((state) => state.Courses.hashListCourseAll);
    //
    const currentUser = useSelector((state) => state.Auths.currentUser);
    const listCourseRegister = currentUser?.chiTietKhoaHocGhiDanh;
    const countMyCourses = listCourseRegister?.length;

    //
    const onChangeSearchText = (e) => {
        setSearchText(e.target.value);
        if (orderDir !== "") {
            setOrderDir("");
        }
    };

    const onChangeOrderDir = (type) => () => {
        setOrderDir(type);
        setSearchText("");
    };

    const renderlistNotResult = useMemo(
        function () {
            if (searchText !== "") {
                return listCourseRegister.filter((course) => {
                    let text = searchText.toLocaleLowerCase();
                    let nameCourse = course.tenKhoaHoc.toLocaleLowerCase();
                    return nameCourse.search(text) === -1;
                });
            } else {
                return [];
            }
        },
        [listCourseRegister, searchText]
    );

    const listFilterCourse = useMemo(
        function () {
            if (listCourseRegister && listCourseRegister.length !== 0) {
                let listCourseSearch = listCourseRegister.filter((course) => {
                    let text = searchText.toLocaleLowerCase();
                    let nameCourse = course.tenKhoaHoc.toLocaleLowerCase();
                    return nameCourse.search(text) !== -1;
                });
                return listCourseSearch.sort(function (a, b) {
                    let indexNumber = 1; // desc
                    if (orderDir === "asc") indexNumber = -1;

                    if (a.tenKhoaHoc !== b.tenKhoaHoc) {
                        return a.tenKhoaHoc > b.tenKhoaHoc
                            ? indexNumber
                            : -indexNumber;
                    } else {
                        return 0;
                    }
                });
            } else {
                return [];
            }
        },
        [listCourseRegister, orderDir, searchText]
    );

    return (
        <Popover
            placement='bottom'
            trigger='click'
            arrowPointAtCenter
            content={
                <ListMyCoursesHeader itemLayout='horizontal'>
                    {/* Tool Search-Sort */}
                    <List.Item className='tool'>
                        <Space size='middle'>
                            <Input
                                value={searchText}
                                allowClear
                                placeholder='Search course...'
                                bordered={false}
                                prefix={<SearchOutlined />}
                                onChange={onChangeSearchText}
                            />
                            <SortAscendingOutlined
                                style={
                                    orderDir === "asc"
                                        ? { background: "#e6fffb" }
                                        : null
                                }
                                onClick={onChangeOrderDir("asc")}
                            />
                            <SortDescendingOutlined
                                style={
                                    orderDir === "desc"
                                        ? { background: "#e6fffb" }
                                        : null
                                }
                                onClick={onChangeOrderDir("desc")}
                            />
                        </Space>
                    </List.Item>
                    {/* List Register Course */}
                    {listFilterCourse.length !== 0 ? (
                        listFilterCourse.map((item, index) => {
                            const course = hashCourses[item.maKhoaHoc];
                            return (
                                <List.Item key={index}>
                                    <Image
                                        preview={false}
                                        src={course?.hinhAnh}
                                    />
                                    <div className='course_info'>
                                        <h3 className='title'>
                                            <Highlighter
                                                highlightClassName='YourHighlightClass'
                                                searchWords={[searchText]}
                                                autoEscape={true}
                                                textToHighlight={
                                                    course?.tenKhoaHoc || ""
                                                }
                                            />
                                        </h3>
                                        <p className='description'>
                                            {course?.moTa}
                                        </p>
                                    </div>
                                    <Popover
                                        placement='leftTop'
                                        trigger='hover'
                                        arrowPointAtCenter
                                        content={
                                            <ListHandleRegisterCourse>
                                                <List.Item className='read_more'>
                                                    Xem chi tiết
                                                </List.Item>
                                                <List.Item className='delete'>
                                                    Hủy ghi danh
                                                </List.Item>
                                            </ListHandleRegisterCourse>
                                        }
                                    >
                                        <div className='handle_course'>
                                            <SettingOutlined />
                                        </div>
                                    </Popover>
                                </List.Item>
                            );
                        })
                    ) : (
                        <List.Item className='empty filter'>
                            <EmptyMyCourse
                                className='filter_course'
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={null}
                            />
                            <div className='notify_empty'>
                                <Highlighter
                                    highlightClassName='YourHighlightClass'
                                    searchWords={[searchText]}
                                    autoEscape={true}
                                    textToHighlight={`Không tìm thấy khóa học ${searchText}`}
                                />
                            </div>
                        </List.Item>
                    )}

                    {renderlistNotResult.map((item, index) => {
                        const course = hashCourses[item.maKhoaHoc];
                        return (
                            <List.Item key={index}>
                                <Image preview={false} src={course?.hinhAnh} />
                                <div className='course_info'>
                                    <h3 className='title'>
                                        {course?.tenKhoaHoc}
                                    </h3>
                                    <p className='description'>
                                        {course?.moTa}
                                    </p>
                                </div>
                                <Popover
                                    placement='leftTop'
                                    trigger='hover'
                                    arrowPointAtCenter
                                    content={
                                        <ListHandleRegisterCourse>
                                            <List.Item className='read_more'>
                                                Xem chi tiết
                                            </List.Item>
                                            <List.Item className='delete'>
                                                Hủy ghi danh
                                            </List.Item>
                                        </ListHandleRegisterCourse>
                                    }
                                >
                                    <div className='handle_course'>
                                        <SettingOutlined />
                                    </div>
                                </Popover>
                            </List.Item>
                        );
                    })}

                    {listCourseRegister && listCourseRegister.length === 0 ? (
                        <List.Item
                            style={{ borderBottom: "none" }}
                            className='empty'
                        >
                            <EmptyMyCourse
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={"Bạn chưa đăng ký khóa học"}
                            />
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
