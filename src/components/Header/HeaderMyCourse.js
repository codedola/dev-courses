import React, { useMemo, useState, useEffect } from "react";
import { Badge, Popover, List, Empty, message } from "antd";
import { CarOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { ListMyCoursesHeader, EmptyMyCourse } from "../Styled/Header.Styled";
import HeaderMyCourseTool from "./HeaderMyCourse.Tool";
import HeaderMyCourseListFilter from "./HeaderMyCourse.ListFilter";
import HeaderMyCourseListNot from "./HeaderMyCourse.ListNot";
import { actDeleteRegisterCourseAsync } from "../../store/course/actions";
export default function HeaderMyCourse() {
    const dispatch = useDispatch();
    const [orderDir, setOrderDir] = useState(""); //desc | asc
    const [searchText, setSearchText] = useState("");
    //
    const currentUser = useSelector((state) => state.Auths.currentUser);
    const listCourseRegister = currentUser?.chiTietKhoaHocGhiDanh;
    const countMyCourses = listCourseRegister?.length;

    //
    useEffect(function () {
        message.config({
            top: 10,
            duration: 2,
            maxCount: 10,
            rtl: true,
            getContainer: () =>
                document.querySelector(".ant-popover-inner-content"),
        });
    }, []);

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
                    return nameCourse.includes(text) === false;
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
                    return nameCourse.includes(text) === true;
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

    function handleDeleteCourseAsync(id) {
        return function () {
            message.loading({
                content: "Loading...",
                key: "updatable",
            });
            dispatch(
                actDeleteRegisterCourseAsync({
                    maKhoaHoc: id,
                    taiKhoan: currentUser.taiKhoan,
                })
            ).then(function (res) {
                if (res.ok) {
                    message.success({
                        content: "Hủy thành công",
                        key: "updatable",
                    });
                } else {
                    message.error({
                        content: "Hủy thất bại",
                        key: "updatable",
                    });
                }
            });
        };
    }

    return (
        <Popover
            placement='bottom'
            trigger='click'
            arrowPointAtCenter
            content={
                <ListMyCoursesHeader
                    itemLayout='horizontal'
                    className='ListMyCoursesHeader'
                >
                    <HeaderMyCourseTool
                        searchText={searchText}
                        orderDir={orderDir}
                        onChangeSearchText={onChangeSearchText}
                        onChangeOrderDir={onChangeOrderDir}
                    />

                    {countMyCourses !== 0 ? (
                        <HeaderMyCourseListFilter
                            searchText={searchText}
                            listFilterCourse={listFilterCourse}
                            handleDeleteCourseAsync={handleDeleteCourseAsync}
                        />
                    ) : null}

                    <HeaderMyCourseListNot
                        renderlistNotResult={renderlistNotResult}
                        handleDeleteCourseAsync={handleDeleteCourseAsync}
                    />

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
            <div className='cart'>
                <Badge count={countMyCourses || 0} showZero>
                    <CarOutlined />
                </Badge>
            </div>
        </Popover>
    );
}
