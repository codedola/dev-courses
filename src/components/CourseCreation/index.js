import React, { useState } from "react";
import { Form, Col, Row, Input, Select, DatePicker, Image } from "antd";
import { RowCourseCreation } from "../Styled/Dashboard.Styled";
import { useSelector } from "react-redux";
import { CameraOutlined } from "@ant-design/icons";
const { Option } = Select;

export default function CourseCreation() {
    const [urlPreview, setUrlPreview] = useState(null);
    const [objFile, setObjFile] = useState(null);
    const listCategories = useSelector((state) => state.Categories.list);

    function hanldePreviewImg(e) {
        const file = e.target.files[0];
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
    return (
        <RowCourseCreation style={{ padding: 12 }}>
            <Col span={24}>
                <Form layout='vertical' hideRequiredMark>
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
                            <Form.Item label='Ngày tạo'>
                                <DatePicker style={{ width: "100%" }} />
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
                            <Form.Item name='hinhAnh' label='Chọn ảnh'>
                                <Input
                                    type='file'
                                    onChange={hanldePreviewImg}
                                />
                            </Form.Item>
                        </Col>
                        <Col span='24'>
                            <Image
                                src={
                                    urlPreview
                                        ? urlPreview
                                        : "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                }
                            />
                        </Col>
                    </Row>
                </Form>
            </Col>
        </RowCourseCreation>
    );
}
