import React from "react";
import { ModalCourseInfo } from "../Styled/Course.Styled";
import { Tag, Space, Divider, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
export default function CourseInfoModal({
    course,
    handleCancel,
    isModalVisible,
}) {
    const {
        tenKhoaHoc,
        moTa,
        hinhAnh,
        biDanh,
        nguoiTao,
        ngayTao,
        soLuongHocVien,
        // danhMucKhoaHoc,
        // luotXem,
    } = course;
    return (
        <ModalCourseInfo
            width={700}
            title={tenKhoaHoc}
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}
            zIndex={2000}
        >
            <div className='Information'>
                <div className='author' style={{ marginBottom: 10 }}>
                    <Space split={<Divider type='vertical' />}>
                        <span>
                            <UserOutlined style={{ marginRight: 4 }} />
                            {nguoiTao.hoTen}
                        </span>
                        <Tag color='lime'>{nguoiTao.tenLoaiNguoiDung}</Tag>
                    </Space>
                </div>

                <div className='state'>
                    <Space direction='vertical' className='state_space'>
                        <Space className='state_created'>
                            <Tag color='#e59819'>BestSeller</Tag>
                            <span style={{ color: "green" }}>
                                Ngày tạo:<strong>{ngayTao}</strong>
                            </span>
                        </Space>
                        <Space
                            split={<Divider type='vertical' />}
                            className='state_detail'
                        >
                            <span>120 total hours</span>
                            <span>All Levels</span>
                            <span>Subtitles</span>
                        </Space>
                        <Space className='rate'>
                            <div className='star'>
                                <span className='num_star'>4.5</span>
                                <Rate disabled allowHalf defaultValue={4.5} />
                            </div>
                            <div className='students'>
                                (
                                {soLuongHocVien === 0
                                    ? "473,613"
                                    : soLuongHocVien}
                                students)
                            </div>
                        </Space>
                    </Space>
                </div>

                <div
                    className='description'
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                        fontSize: "1rem",
                    }}
                >
                    {moTa}
                </div>
                <div className='image'>
                    <img
                        alt={biDanh}
                        src={hinhAnh}
                        style={{ width: "100%", objectFit: "fill" }}
                    />
                </div>
            </div>
        </ModalCourseInfo>
    );
}
