import React from 'react'
import { Divider, Space, Tag, Rate} from "antd";
import { UserOutlined, CheckOutlined } from "@ant-design/icons"
import { CourseInfoHoveCard} from "../Styled/Home.Styled"
export default function CourseInfo({ course, isHoverInfo=false }) {
     const {
        tenKhoaHoc,
        moTa,
     
        nguoiTao,
        ngayTao,
        soLuongHocVien,
       
    } = course;
    return (
        <CourseInfoHoveCard>
                <h1 className="name_course">{tenKhoaHoc}</h1>
                <div className='author' style={{ marginBottom: 10 }}>
                    <Space split={<Divider type='vertical' />}>
                        <span>
                            <UserOutlined style={{ marginRight: 4 }} />
                            {nguoiTao.hoTen}
                        </span>
                        <Tag color='red'>{nguoiTao.tenLoaiNguoiDung}</Tag>
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
                                    : soLuongHocVien}{" "}
                                students)
                            </div>
                        </Space>
                    </Space>
                </div>

                <div
                    className='description'
                
                >
                    {moTa}</div>
                <ul className="list_detail">
                <li>
                    <CheckOutlined />
                    <span>Become an advanced, confident, and modern JavaScript developer from scratch.</span>
                    
                    </li>
                <li><CheckOutlined />
                    <span>Build 6 beautiful real-world projects for your portfolio (not boring toy apps)</span></li>
                <li><CheckOutlined />
                    <span>Design your unique learning path according to your goals: course pathways</span>
                    </li>
               
                </ul>
            </CourseInfoHoveCard>
    )
}
