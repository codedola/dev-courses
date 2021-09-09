import React, {useState, useEffect} from 'react'
import { Row, Col} from "antd"
import CourseUploadSelected from './CourseUploadSelected'
import CourseUploadForm from './CourseUploadForm';
import { showNotification, typeNotify, typePlacement } from "../shared/Notification"

export default function CourseUpload() {
    const [courseUpload, setCourseUpload] = useState(null);
    const [objFile, setObjFile] = useState(null);
    const [urlPreview, setUrlPreview] = useState(null);

    useEffect(function () {
        if (courseUpload) {
            setUrlPreview(courseUpload.hinhAnh);
            setObjFile(courseUpload.hinhAnh)
        }
    }, [courseUpload])

    //
    function onSetCourseUpload(course) {
        setCourseUpload(course)
    }
    function onDeleteCourseUpload() {
        setCourseUpload(null)
    }

    
    function hanldePreviewImg(e) {
        const file = e.target.files[0];
        const isLt1M = file.size / 1024 / 1024 < 1;
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            setUrlPreview(null);
            setObjFile(null);
            showNotification({
                type: typeNotify.error,
                placement: typePlacement.bottomLeft,
                message: "Bạn chỉ được upload JPG/PNG file!"
            })
            return;
        }
         
        if (!isLt1M) {
           showNotification({
                type: typeNotify.error,
                placement: typePlacement.bottomLeft,
                message: "Dung lượng file vượt quá 1 MB!"
           })
            return;
        }
        const reader = new FileReader();
        reader.addEventListener(
            "load",
            function () {
                setUrlPreview(reader.result);
            },
            false
        );

        if (file) {
            setObjFile(file);
            reader.readAsDataURL(file);
        }
    }


    function handleUploadCourse(formData) {
        console.log("handleUploadCourse", formData)
    }
    return (
        <Row>
            <Col span={24}>
                <CourseUploadSelected
                    courseUpload={courseUpload}
                    onSetCourseUpload={onSetCourseUpload}
                    onDeleteCourseUpload={onDeleteCourseUpload}
                />
            </Col>
            <Col span={24}>
                {
                    courseUpload ?
                        <CourseUploadForm
                            courseUpload={courseUpload}
                            urlPreview={urlPreview}
                            handleUploadCourse={handleUploadCourse}
                            hanldePreviewImg={hanldePreviewImg}
                        /> : null
                }
            </Col>
        </Row>
    )
}
