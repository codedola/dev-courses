import React, { useMemo } from 'react'
import {
    Row, Col, Popover, List,
    Empty, Image, Radio, Space, Badge
} from "antd"
import {ListMyCoursesHeader, EmptyMyCourse} from "../Styled/Header.Styled"
import { MedicineBoxOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux"
import { WrapperTitleCourseUpload, RadioAntStyled, InfoCourseUpload } from "./CourseUpload.Styled"
import IconUploading from './IconUploading'
export default function CourseUploadSelected({courseUpload, onSetCourseUpload, onDeleteCourseUpload}) {
  

    const currentUser = useSelector(state => state.Auths.currentUser);
    const listAll = useSelector(state => state.Courses.listAll);
    const hashListCourse = useSelector(
        (state) => state.Courses.hashListCourseAll
    );

    const listCourseCreation = useMemo(() => {
        if (currentUser === null) return []
        return listAll?.filter(item => item?.nguoiTao?.taiKhoan === currentUser.taiKhoan)
    }, [listAll, currentUser])

    const onChangeCourseEdit = e => {
        if (onSetCourseUpload && typeof onSetCourseUpload === "function") {
            onSetCourseUpload(e.target.value)
        }
        
    };
    return (
        <Row style={{marginTop: 10}}>
            <Col lg={10} style={{ display: "flex", alignItems: "center" }}>
                {
                    courseUpload === null ?
                <Popover
                    trigger="hover"
                    placement="bottomLeft"
                    content={
                        <ListMyCoursesHeader
                            itemLayout='horizontal'
                            className='ListMyCoursesHeader'
                        >
                            <Radio.Group onChange={onChangeCourseEdit} value={courseUpload}>
                                {listCourseCreation?.map((item, index) => {
                                    const course = hashListCourse[item.maKhoaHoc];
                                    return (
                                        <RadioAntStyled value={course} key={index}>
                                            <List.Item>
                                                <Image preview={false} src={course?.hinhAnh} />
                                                <div className='course_info'>
                                                    <h3 className='title'>{course?.tenKhoaHoc}</h3>
                                                    <p className='description'>{course?.moTa}</p>
                                                </div>
                                            </List.Item>
                                        </RadioAntStyled>
                                    );
                                })}
                            </Radio.Group>
                

                            {listCourseCreation.length === 0 ? (
                                <List.Item
                                    style={{ borderBottom: "none" }}
                                    className='empty'
                                >
                                    <EmptyMyCourse
                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                        description={"B???n ch??a t???o kh??a h???c"}
                                    />
                                </List.Item>
                            ) : null}
                        </ListMyCoursesHeader>
                    }
                >
                    <WrapperTitleCourseUpload>
                        <Space>
                            <MedicineBoxOutlined />
                            <span className="title">
                                Ch???n Kh??a H???c
                            </span>
                        </Space>
                    </WrapperTitleCourseUpload>
                </Popover>
                :
                <WrapperTitleCourseUpload className="delete_course" onClick={onDeleteCourseUpload}>
                    <Space>
                        <MedicineBoxOutlined />
                        <span className="title">
                            H???y Ch???nh S???a
                        </span>
                    </Space>
                </WrapperTitleCourseUpload>
            }
            </Col>
            <Col lg={14}>
                {
                    courseUpload !== null ?
                        <InfoCourseUpload>
                           
                            <IconUploading />
                            <Badge.Ribbon text="Uploading..." color="#108ee9"
                                placement="start" style={{ top: "-8px" }}
                            >
                                <div className='course_upload'>
                                    <Image preview={false} src={courseUpload?.hinhAnh} />
                                    <div className="course_info">
                                        <h3 className='title'>{courseUpload?.tenKhoaHoc}</h3>
                                        <p>{courseUpload?.moTa}</p>
                                        <div className="mark_loading">
                                        
                                        </div>
                                    
                                    </div>
                                </div>

                            </Badge.Ribbon>
                        
                        </InfoCourseUpload> : null
                }
               
            </Col>
        </Row>
     
    )
}

