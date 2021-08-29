import React, { useState } from "react";
import { Col, Affix } from "antd";
import { RowManagerUser } from "../Styled/Dashboard.Styled";
import ManagerUserList from "./ManagerUserList";
import ManagerUserTool from "./ManagerUserTool";
import { actGetUserPagingAsync } from "../../store/user/actions";
import usePagingCourse from "../../utilities/hook/usePagingCourse";
export default function ManagerUsers({ containerAffix }) {
    const [searchText, setSearchText] = useState("");
    const [orderBy, setOrderBy] = useState("");

    const { listCourses: listUser } = usePagingCourse({
        funcSelector: (state) => state.User.PagingUser,
        actAsync: actGetUserPagingAsync,
    });
    function onChangeOrderBy(typeSort) {
        return function () {
            setOrderBy(typeSort);
            setSearchText("");
        };
    }

    function onChangeSearchText(e) {
        setSearchText(e.target.value);
        setOrderBy("");
    }
    return (
        <RowManagerUser>
            <Col span={24}>
                <Affix target={() => containerAffix} offsetTop={0}>
                    <ManagerUserTool
                        searchText={searchText}
                        onChangeSearchText={onChangeSearchText}
                        onChangeOrderBy={onChangeOrderBy}
                    />
                </Affix>
            </Col>
            {/* List user */}
            <Col span={24}>
                <ManagerUserList listUser={listUser} />
            </Col>
        </RowManagerUser>
    );
}
