import React, {useState} from "react";
import { Row, Col, Divider } from "antd";
import { ShoppingCartOutlined, PushpinOutlined} from "@ant-design/icons"
import CourseItemDashboard from "../Courses/CourseItemDashboard";
import UserDescription from "../UserDescription";
import { RowManagerUserInfo } from "../Styled/Dashboard.Styled";
import { useSelector } from "react-redux";
import {SpaceFilterTypeCourse } from "../Styled/Dashboard.Manager.Styled"
export default function ManagerCourse() {
    const [activeRegister, setActiveRegister] = useState(true);
    
    const hashListCourse = useSelector(
        (state) => state.Courses.hashListCourseAll
    );
    const listAll = useSelector((state) => state.Courses.listAll);
    const currentUser = useSelector((state) => state.Auths.currentUser);
    const listRegisterCourses = currentUser?.chiTietKhoaHocGhiDanh;
    const listCourseCreation = listAll.filter(item => item.nguoiTao.taiKhoan === currentUser.taiKhoan)

    
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
                    activeRegister ? <Row>
                    {listRegisterCourses &&
                        listRegisterCourses.map(function (course, index) {
                            const courseInfo = hashListCourse[course.maKhoaHoc];
                            return (
                                <Col span={8} key={index}>
                                    <CourseItemDashboard course={courseInfo} />
                                </Col>
                            );
                        })}
                </Row> : <Row>
                    {listCourseCreation &&
                        listCourseCreation.map(function (course, index) {
                            const courseInfo = hashListCourse[course.maKhoaHoc];
                           
                            return (
                                <Col span={8} key={index}>
                                    <CourseItemDashboard course={courseInfo} isCreation={true} />
                                </Col>
                            );
                        })}
                </Row>
                }
                
            </Col>
        </RowManagerUserInfo>
    );
}
