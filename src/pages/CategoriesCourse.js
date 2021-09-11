import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Affix, Result, Row } from "antd";
import { HomeContainer } from "../components/Styled/Home.Styled";
import { ColResult } from "../components/Styled/Search.Styled";
import { SpinStyled } from "../components/Styled/App.Styled";
import ListCourses from "../components/Home/ListCourses";
import { actGetListCourseByCategoryAsync } from "../store/course/actions"
export default function CategoriesCourse() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [listCourseCategory, setListCourseCategory] = useState([])
    const categoryName = useParams()?.category;

    useEffect(function () {
        if (categoryName) {
            setLoading(true)
            dispatch(actGetListCourseByCategoryAsync(categoryName))
                .then(function (res) {
                    setLoading(false)
                    if (res.ok) {
                        setListCourseCategory(res.data)
                    }
                })
        }
       
     }, [categoryName,dispatch])
    return (
        <HomeContainer style={{ marginTop: 10 }}>
            <SpinStyled spinning={loading} size='large'>
                <Row style={{ paddingBottom: 10 }}>
                    <ColResult span={24}>
                        <Affix>
                            <Result
                                status={
                                    listCourseCategory.length === 0 ? "500" : "success"
                                }
                                title={
                                    listCourseCategory.length !== 0
                                        ? `Có ${listCourseCategory.length} kết quả với danh mục "${categoryName}"`
                                        : `Không tìm thấy khóa học về "${categoryName}"`
                                }
                            />
                        </Affix>
                    </ColResult>
                </Row>

                {listCourseCategory.length !== 0 ? (
                    <ListCourses listCourses={listCourseCategory} />
                ) : null}
            </SpinStyled>
           
        </HomeContainer>
    )
}
