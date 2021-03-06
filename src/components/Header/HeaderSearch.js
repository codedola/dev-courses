import React, { useMemo, useState } from "react";
import { SearchStyled, ItemIconSearch,EmptyMyCourse } from "../Styled/Header.Styled";
import { useHistory, Link} from "react-router-dom";
import { AutoComplete, Row, Col, Empty } from 'antd';
import { RiseOutlined, FireOutlined, HistoryOutlined, SearchOutlined} from "@ant-design/icons"
import { listIcons } from "../Dashboard/ManagerCategories";
import { useSelector } from "react-redux"
// Constant
const labelCSS = { fontSize: 14, fontWeight: 600, color: "gray" }

//
export default function HeaderSearch() {
    const history = useHistory();
    const [searchText, setSearchText] = useState("")
    const listCourse = useSelector(state => state.Courses.listAll)
    const onSearch = (value) => {
        if (value.trim() !== "") {
            history.push(`/search?q=${value}`);
        }
    };

    const renderItemCategories = () => ({
        value: "",
        label: (
            <Row gutter={[8, 8]}>
                {listIcons.map(function (item, index) {
                    return (
                        <Col span={8} key={index} >
                            <Link to={"/categories/" + item.name}>
                              <ItemIconSearch>
                                {item.icon}
                                <p style={{ marginBottom: 0 }}>{item.name}</p>
                            </ItemIconSearch>
                            </Link>
                          
                        </Col>
                    );
                })}
            </Row>
        ),
    });

    const renderItemResultPopular = (course) => ({
        value: course?.tenKhoaHoc,
        label: (
            <Link to={"/search?q=" + course?.tenKhoaHoc}
                style={{ fontWeight: 600, fontSize: 12, color: "#333", display: "block" }}
            >
                <HistoryOutlined style={{ marginRight: 10, color: "gray", fontSize: 16}} />
                {course?.tenKhoaHoc + " (" + course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc + ")"}
            </Link>
        ),
    })

    const listCourseFilterSearch = useMemo(function () {
        if (searchText.trim() !== "") {
            return listCourse?.filter(function (course) {
                const text = searchText.toLowerCase();
                const courseName = course?.tenKhoaHoc?.toLowerCase();
                return courseName.includes(text)
            })
        }

        return []
    }, [searchText, listCourse])

    const onSearchText = (e) => {
        setSearchText(e.target.value)
    }

    const optionsSearch = useMemo(function () {
        const listResultItem = listCourseFilterSearch?.map(function (course) {
            return {
                value: course?.tenKhoaHoc,
                label: (
                    <Link to={"/search?q=" +  course?.tenKhoaHoc}
                        style={{ fontWeight: 600, fontSize: 12, color: "#333", display: "block" }}
                    >
                        <SearchOutlined style={{ marginRight: 10, color: "gray", fontSize: 16}} />
                         {course?.tenKhoaHoc}
                    </Link>
                ),
            }
        })
        
        return [{
            label: <span style={labelCSS}>K???t qu??? t??m ki???m</span>,
            options: listResultItem.length !== 0 ? listResultItem : [{
                value: "",
                label: (
                    <EmptyMyCourse
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={"Kh??ng t??m th???y: " + searchText}
                    />
                )
            }]
        }]
    }, [listCourseFilterSearch, searchText])


    const optionsDefault = [
        {
            label: <span style={labelCSS}>
                T??m Ki???m Ph??? Bi???n <RiseOutlined style={{fontSize: 24, color: "#46ff84"}} />
            </span>,
            options: [
                renderItemResultPopular(listCourse[0]),
                renderItemResultPopular(listCourse[2]),
            ]
        },
        {
            label: <span style={labelCSS}>
                Danh M???c N???i B???t <FireOutlined style={{fontSize: 24, color: "#f9696d"}}/>
            </span>,
            options: [renderItemCategories()],
        },
    ]

    return (
        <div className='header_search'>
            <AutoComplete
                dropdownClassName={` certain-category-search-dropdown ${searchText.trim() === "" ? "header_course" : ""}`}
                backfill={true}
                // open={true}
                options={searchText.trim() === "" ? optionsDefault : optionsSearch}
            >
                <SearchStyled
                    placeholder='T??m ki???m kh??a kh???c...'
                    allowClear
                    size='large'
                    onSearch={onSearch}
                    bordered={false}
                    onChange={onSearchText}
                />
            </AutoComplete>
        </div>
    );
}
