import React, {useMemo} from 'react'
import { Input, AutoComplete , Popover} from "antd"
import { UserOutlined } from "@ant-design/icons"
import BackgroupImage from "../../assets/images/backgroundUdemy.jpg"
import { BackgroundHome} from "../Styled/Home.Styled"
import {useSelector } from "react-redux"
import CourseInfo from './CourseInfo'
import { useHistory } from "react-router-dom"
const { Search } = Input

const LabelCSS = {
        color: "#08979c",
        background:"#e6fffb",
        fontSize: 16,
        fontWeight: 600,
        padding: "6px 4px",
        borderRadius: 10,
        marginBottom: 0
}
export default function BackgroupHome() {
    const history = useHistory()
    const listCourse = useSelector(state => state.Courses.listAll);
    const listCategories = useSelector(state => state.Categories.list)

    const onSearch = value => {
        if (value.trim() !== "") {
            history.push("/search?q=" + value)
        }
    }

    const renderItem = (course) => ({
        value: course.tenKhoaHoc,
        label: (
            <Popover placement="rightBottom"
                content={<CourseInfo course={course} />} trigger="hover">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: "gray"
                    }}
                >
                    {course.tenKhoaHoc}
                    <span>
                        <UserOutlined /> {course.luotXem}
                    </span>
                </div>
            </Popover>
        ),
    });
 


   
    const courseOptions = useMemo(function () {
        return listCategories?.map(category => {
            let listCourseCategory = listCourse?.filter(course => {
                const { maDanhMucKhoahoc } = course.danhMucKhoaHoc;
                return category.maDanhMuc === maDanhMucKhoahoc
            })

            let listOptions = listCourseCategory.map(course => renderItem(course))
            
            return {
                label: <p style={LabelCSS}>{category.tenDanhMuc}</p>,
                options: listOptions.length !== 0 ? listOptions : []
            }
        })
    }, [listCategories, listCourse])


    return (
        <BackgroundHome>
            <div className="image_course">
                <img alt="" src={BackgroupImage} />
            </div>
            <div className="search_course">
                <h1>DevCourse | A broad selection of courses</h1>
                <p>Skills for your present (and your future). Get started with us.</p>
                <AutoComplete
                    dropdownClassName="certain-category-search-dropdown"
                    backfill={true}
                    options={courseOptions}
                >
                     <Search placeholder="What do you want to learn?" onSearch={onSearch} size="large" bordered={false} /> 
                </AutoComplete>
            </div>
        </BackgroundHome>
    )
}
