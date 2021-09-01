import React, { useState, useRef } from "react";
import { Form, Col, Row, Input, Select, DatePicker, Image } from "antd";
import {
    RowCourseCreation,
    ButtonCreateCourse,
} from "../Styled/Dashboard.Styled";
import { useSelector, useDispatch } from "react-redux";
import { CameraOutlined } from "@ant-design/icons";
import { actCreateNewCourseAsync } from "../../store/course/actions"
import {showNotification, typeNotify , typePlacement} from "../shared/Notification"
const { Option } = Select;

export default function CourseCreation() {
    const inputFile = useRef(null);
    const dispatch = useDispatch();
    //
    const [objFile, setObjFile] = useState(null);
    const [urlPreview, setUrlPreview] = useState(null);
    const currentUser = useSelector((state) => state.Auths.currentUser);
    const listCategories = useSelector((state) => state.Categories.list);

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

    function onClickInputFile() {
        if (inputFile) {
            inputFile.current.input.click();
        }
    }

    function hanldeCreateNewCourse(formData) {
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
        dispatch(actCreateNewCourseAsync({...formData, ngayTao, hinhAnh, taiKhoanNguoiTao}))
    }
    return (
        <RowCourseCreation>
            <Col span={24}>
                <Form
                    layout='vertical'
                    size='large'
                    onFinish={hanldeCreateNewCourse}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name='tenKhoaHoc' label='Tên khóa học'>
                                <Input placeholder='Nhập tên khóa học' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name='maKhoaHoc' label='Mã khóa học'>
                                <Input placeholder='Nhập mã khóa học' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name='maDanhMucKhoaHoc' label='Danh mục'>
                                <Select placeholder='Chọn danh mục'>
                                    {listCategories?.map(function (category) {
                                        const { maDanhMuc, tenDanhMuc } =
                                            category;
                                        return (
                                            <Option
                                                value={maDanhMuc}
                                                key={maDanhMuc}
                                            >
                                                {tenDanhMuc}
                                            </Option>
                                        );
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name='maNhom' label='Nhóm'>
                                <Select placeholder='Chọn nhóm'>
                                    <Option value='GP01'>GP01</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name='biDanh' label='Bí danh'>
                                <Input placeholder='Nhập mã bí danh' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name='ngayTao' label='Ngày tạo'>
                                <DatePicker
                                    style={{ width: "100%" }}
                                    format={["DD/MM/YYYY"]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name='moTa' label='Mô tả'>
                                <Input.TextArea
                                    rows={4}
                                    placeholder='Mô tả khóa học'
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name='hinhAnh' className='inputFile_img'>
                                <Input
                                    type='file'
                                    ref={inputFile}
                                    onChange={hanldePreviewImg}
                                />
                            </Form.Item>
                        </Col>

                        <Col span='24'>
                            <div className='image_course'>
                                <CameraOutlined onClick={onClickInputFile} />
                                {urlPreview ? (
                                    <Image
                                        src={urlPreview || ""}
                                        style={{ width: "100%" }}
                                    />
                                ) : null}
                            </div>
                        </Col>
                    </Row>
                    <Form.Item style={{ marginTop: 10 }}>
                        <ButtonCreateCourse
                            type='primary'
                            size='large'
                            htmlType='submit'
                        >
                            Tạo khóa học
                        </ButtonCreateCourse>
                    </Form.Item>
                </Form>
            </Col>
        </RowCourseCreation>
    );
}
