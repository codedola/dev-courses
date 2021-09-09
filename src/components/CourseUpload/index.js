import React from 'react'
import { Row, Col} from "antd"
import CourseUploadSelected from './CourseUploadSelected'
export default function CourseUpload() {
    return (
        <Row>
            <Col span={24}>
                <CourseUploadSelected />
            </Col>
            <Col>
                {/* Form Edit Course */}
            </Col>
        </Row>
    )
}
