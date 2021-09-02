import React, {useState, useMemo} from "react";
import { Row, Col, Divider, Empty } from "antd";
import { ShoppingCartOutlined, PushpinOutlined} from "@ant-design/icons"
import CourseItemDashboard from "../Courses/CourseItemDashboard";
import UserDescription from "../UserDescription";
import { RowManagerUserInfo } from "../Styled/Dashboard.Styled";
import { useSelector } from "react-redux";
import {SpaceFilterTypeCourse , EmptyListStyled} from "../Styled/Dashboard.Manager.Styled"
export default function ManagerCourse() {
    const [activeRegister, setActiveRegister] = useState(true);
    
    const hashListCourse = useSelector(
        (state) => state.Courses.hashListCourseAll
    );
    const listAll = useSelector((state) => state.Courses.listAll);
    const currentUser = useSelector((state) => state.Auths.currentUser);
    const listRegisterCourses = currentUser?.chiTietKhoaHocGhiDanh;


    const listCourseCreation = useMemo(() => {
        return listAll.filter(item => item.nguoiTao.taiKhoan === currentUser.taiKhoan)
     }, [listAll, currentUser])
    
    return (
        <RowManagerUserInfo gutter={[16, 16]}>
            <Col span={24}>
                <UserDescription />
            </Col>
            <Col span={24}>
                <SpaceFilterTypeCourse
                    align="center"
                    size="large"
                    split={<Divider type="vertical" />}
                >
                    <div
                        onClick={() => setActiveRegister(!activeRegister)}
                        className={`item register ${activeRegister ? "active" : ""}`}
                    >
                        <ShoppingCartOutlined />
                        Khóa học đã ghi danh
                    </div>
                    <div onClick={() => setActiveRegister(!activeRegister)}
                        className={`item creation ${!activeRegister ? "active" : ""}`}
                    >
                       <PushpinOutlined /> Khóa học đã tạo
                    </div>
                </SpaceFilterTypeCourse>
            </Col>
            <Col span={24} style={{ paddingLeft: 0, paddingRight: 0 }}>
                {
                    activeRegister ?
                        <Row>
                        {listRegisterCourses.length !== 0 ?
                            listRegisterCourses?.map(function (course, index) {
                                const courseInfo = hashListCourse[course.maKhoaHoc];
                                return (
                                    <Col span={8} key={index}>
                                        <CourseItemDashboard course={courseInfo} />
                                    </Col>
                                );
                            }) : <Col span={24} >
                                    <EmptyListStyled
                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                        description="Bạn chưa ghi danh khóa học"
                                        
                                    />
                                </Col>
                        
                        }
                    </Row>
                        :
                    <Row>
                    {listCourseCreation.length !== 0 ?
                        listCourseCreation?.map(function (course, index) {
                            const courseInfo = hashListCourse[course.maKhoaHoc];
                           
                            return (
                                <Col span={8} key={index}>
                                    <CourseItemDashboard course={courseInfo} isShowCreation={true} />
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
                }
                
            </Col>
        </RowManagerUserInfo>
    );
}
