import React from 'react'
import { Row, Col } from "antd";
import {CheckOutlined} from "@ant-design/icons"
import { CourseIntroductionHead, CourseIntroductionList} from "../Styled/Home.Styled"
import BgFrontEndDev from "../../assets/images/bg_frontend.png"
export default function IntroductionCourses() {
    return (
        <div className="introduction_courses">
            <Row>
                <Col lg={12}>
                    <div className="bg_introduction">
                        <img src={BgFrontEndDev} alt="BgFrontEndDev" />
                    </div>
                </Col>
                <Col lg={12}>
                    <CourseIntroductionHead>
                        <h3 className="title_course">Introduction</h3>
                        <h2 className="title_head">
                            Feel confident your team is learning from the industry’s best
                        </h2>
                        <p className="description">Upskill your team with courses on the most in-demand technology topics, taught by the experts who know them best.</p>
                    </CourseIntroductionHead>
                    <Row>
                        <Col span={12}>
                            <CourseIntroductionList>
                                <p>
                                    <CheckOutlined />
                                    Software Development
                                </p>
                                <p><CheckOutlined />Machine Learning & AI</p>
                                <p><CheckOutlined />IT Ops</p>
                            </CourseIntroductionList>
                           
                        </Col>
                        <Col span={12}>
                            <CourseIntroductionList>
                                <p><CheckOutlined />Data Professional</p>
                                <p><CheckOutlined />Information & Cybersecurity</p>
                                <p><CheckOutlined />Cloud computing</p>
                            </CourseIntroductionList>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
