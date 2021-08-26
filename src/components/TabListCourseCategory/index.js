import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import { TabsStyled } from "../Styled/TabListCourse.Styled";
import CourseListCategories from "../Courses/CourseListCategories";
const { TabPane } = Tabs;

export default function TabListCourseCategory() {
    const [activeKey, setActiveKey] = useState(null);
    const listCategories = useSelector((state) => state.Categories.list);

    useEffect(
        function () {
            if (listCategories?.length !== 0) {
                setActiveKey(listCategories[0].maDanhMuc);
            }
        },
        [listCategories]
    );

    function handleChangeTabs(activeKey) {
        setActiveKey(activeKey);
    }
    return (
        <TabsStyled
            defaultActiveKey={activeKey}
            type='card'
            size='large'
            moreIcon={null}
            onChange={handleChangeTabs}
        >
            {activeKey &&
                listCategories.map(function (category) {
                    return (
                        <TabPane
                            tab={category.tenDanhMuc}
                            key={category.maDanhMuc}
                        >
                            <CourseListCategories keyCategory={activeKey} />
                        </TabPane>
                    );
                })}
        </TabsStyled>
    );
}
