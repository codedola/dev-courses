import React, {useRef} from 'react'
import { useSelector} from "react-redux"
import { CameraOutlined} from "@ant-design/icons"
import { Form, Row, Col, Input, Select, DatePicker, Image } from "antd"
import {ButtonCreateCourse } from "../Styled/Dashboard.Styled"
const {Option } = Select
export default function FormCreation({ urlPreview, hanldeCreateNewCourse, hanldePreviewImg }) {
    const inputFile = useRef(null)
    
    const listCategories = useSelector((state) => state.Categories.list);

    function onClickInputFile() {
        if (inputFile) {
            inputFile.current.input.click();
        }
    }
    return (
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
                        <Input placeholder='Nhập bí danh' />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name='ngayTao' label='Ngày tạo'>
                        <DatePicker
                            placeholder="Chọn ngày tạo"
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
    )
}
