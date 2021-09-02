import React from 'react'
import { Result, Button, Descriptions, Image } from 'antd';
import { useSelector} from "react-redux"
export default function CreateSuccess({ maKhoaHoc, setNewCourse }) {
    const course = useSelector(state => state.Courses.hashListCourseAll[maKhoaHoc])
    function setNullForNewCourse() {
        setNewCourse(null)
    }
    return (
            <Result
                status="success"
                title={course?.tenKhoaHoc}
                subTitle={`Khóa học ${course?.tenKhoaHoc} được tạo thành công`}
            extra={
                <Descriptions
                    layout="vertical"
                    column={2}
                    bordered
                    size="middle"
                    extra={<Button type="default" size="middle" onClick={setNullForNewCourse}>Tạo khóa học mới</Button>}
                >
                    <Descriptions.Item label="Tên khóa học">{course?.tenKhoaHoc}</Descriptions.Item>
                    <Descriptions.Item label="Mã khóa học">{course?.maKhoaHoc}</Descriptions.Item>
                    <Descriptions.Item label="Chủ đề">
                        {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày tạo">{ course?.ngayTao}</Descriptions.Item>
                    <Descriptions.Item label="Mô tả" span={2}>{course?.moTa}</Descriptions.Item>
                    <Descriptions.Item label="Hình ảnh">
                        <Image
                            src={course?.hinhAnh}
                            preview = {false}
                        />
                    </Descriptions.Item>
                </Descriptions>
            }
        />
  
       
    )
}
