import React, { useMemo, useState } from "react";
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
    const [containerMessage, setContainerMessage] = useState(null);
    const [loading, setLoading] = useState(false)
    //
    const currentUser = useSelector((state) => state.Auths.currentUser);
    const listCourseRegister = currentUser?.chiTietKhoaHocGhiDanh;
    const countMyCourses = listCourseRegister?.length;

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
            if (currentUser === null) return [];
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
        [listCourseRegister, searchText, currentUser]
    );

    const listFilterCourse = useMemo(
        function () {
            if (currentUser === null) return [];
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
        [listCourseRegister, orderDir, searchText, currentUser]
    );

    function handleDeleteCourseAsync(id) {
        return function () {
            if(loading) return
            setLoading(true);
            dispatch(
                actDeleteRegisterCourseAsync({
                    maKhoaHoc: id,
                    taiKhoan: currentUser.taiKhoan,
                })
            ).then(function (res) {
                setLoading(false);
                  message.config({
                    top: 10,
                    duration: 2,
                    maxCount: 10,
                    rtl: true,
                    getContainer: () => containerMessage || document.body,
                });
                if (res.ok) {
                    message.success("Hủy thành công");
                } else {
                    message.error("Hủy thất bại");
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
                 <div ref={setContainerMessage}>
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
                    </div>
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
