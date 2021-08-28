import React from "react";
import { List, Image, Popover } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { ListHandleRegisterCourse } from "../Styled/Header.Styled";
export default function HeaderMyCourseListNot({
    renderlistNotResult,
    handleDeleteCourseAsync,
}) {
    const hashCourses = useSelector((state) => state.Courses.hashListCourseAll);

    return (
        <>
            {renderlistNotResult.map((item, index) => {
                const course = hashCourses[item.maKhoaHoc];
                return (
                    <List.Item key={index}>
                        <Image preview={false} src={course?.hinhAnh} />
                        <div className='course_info'>
                            <h3 className='title'>{course?.tenKhoaHoc}</h3>
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
            })}
        </>
    );
}
