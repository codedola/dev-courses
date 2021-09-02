import React, { useState } from "react";
import { Col } from "antd";
import {RowCourseCreation} from "../Styled/Dashboard.Styled";
import { useSelector, useDispatch } from "react-redux";
import { actCreateNewCourseAsync } from "../../store/course/actions"
import { showNotification, typeNotify, typePlacement } from "../shared/Notification"
import FormCreation from "./FormCreation";
import CreateSuccess from "./CreateSuccess";
export default function CourseCreation() {
   
    const dispatch = useDispatch();
    //
    const [newCourse, setNewCourse] = useState(null)
    const [objFile, setObjFile] = useState(null);
    const [urlPreview, setUrlPreview] = useState(null);
    const currentUser = useSelector((state) => state.Auths.currentUser);

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

 

    function hanldeCreateNewCourse(formData) {
        for (let key in formData) {
            if (formData[key] === undefined) {
                 showNotification({
                type: typeNotify.error,
                placement: typePlacement.bottomLeft,
                message: "Có thông tin rỗng. Xin hãy kiểm tra lại"
            })
                return
            }
            
        }
        if (objFile === null) {
            showNotification({
                type: typeNotify.error,
                placement: typePlacement.bottomLeft,
                message: "Khóa học phải có ảnh!"
            })
            return
        } 
        const hinhAnh = objFile;
        const taiKhoanNguoiTao = currentUser?.taiKhoan;
        const ngayTao = formData.ngayTao.format("DD/MM/YYYY");
        dispatch(actCreateNewCourseAsync({ ...formData, ngayTao, hinhAnh, taiKhoanNguoiTao }))
            .then(function (res) {
                if (res.ok) {
                    setNewCourse(res.course);
                } else {
                    showNotification({
                        type: typeNotify.error,
                        placement: typePlacement.bottomLeft,
                        message: "Tạo Thất Bại"
                    })
                }
            })
    }
    return (
        <RowCourseCreation>
            <Col span={24}> {
                newCourse ?  <FormCreation urlPreview={urlPreview} hanldeCreateNewCourse={hanldeCreateNewCourse} hanldePreviewImg={hanldePreviewImg}/> : <CreateSuccess />
            }
               
            </Col>
        </RowCourseCreation>
    );
}
