import React, {useMemo} from 'react'
import { useSelector } from "react-redux"
import { Row, Col, Empty, Modal } from "antd"
import CourseItemEdit from "../Courses/CourseItemEdit"
import { EmptyListStyled} from "../Styled/Dashboard.Manager.Styled"
export default function MyCourseModal({visible, onCancel}) {
    const currentUser = useSelector(state => state.Auths.currentUser);
    const listAll = useSelector(state => state.Courses.listAll);
    const hashListCourse = useSelector(
        (state) => state.Courses.hashListCourseAll
    );

    const listCourseCreation = useMemo(() => {
        if(currentUser === null) return []
        return listAll?.filter(item => item?.nguoiTao?.taiKhoan === currentUser.taiKhoan)
     }, [listAll, currentUser])
    return (
        <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
      
        onCancel={onCancel}
        width={800}
      >
        <Row>
                    {listCourseCreation?.length !== 0 ?
                        listCourseCreation?.map(function (course, index) {
                            const courseInfo = hashListCourse[course.maKhoaHoc];
                           
                            return (
                                <Col span={8} key={index}>
                                    <CourseItemEdit course={courseInfo} isShowCreation={true} />
                                </Col>
                            );
                        }): <Col span={24} >
                            <EmptyListStyled
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description="Bạn chưa tạo khóa học"
                                
                            />
                        </Col>
                    }
                </Row>
      </Modal>
             
    
    )
}
