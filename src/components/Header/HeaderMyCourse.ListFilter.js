import React from "react";
import { List, Image, Popover, Empty } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
import {
    ListHandleRegisterCourse,
    EmptyMyCourse,
} from "../Styled/Header.Styled";
export default function HeaderMyCourseListFilter({
    searchText,
    listFilterCourse,
    handleDeleteCourseAsync,
}) {
    const hashCourses = useSelector((state) => state.Courses.hashListCourseAll);

    return (
        <>
            {listFilterCourse.length !== 0 ? (
                listFilterCourse.map((item, index) => {
                    const course = hashCourses[item.maKhoaHoc];
                    return (
                        <List.Item key={index}>
                            <Image preview={false} src={course?.hinhAnh} />
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
                                <p className='description'>{course?.moTa}</p>
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
                                        <List.Item
                                            className='delete'
                                            onClick={handleDeleteCourseAsync(
                                                item.maKhoaHoc
                                            )}
                                        >
                                            Xóa khóa học
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
        </>
    );
}
