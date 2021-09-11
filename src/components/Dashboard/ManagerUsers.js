import React, { useState, useMemo } from "react";
import { Col, Affix } from "antd";
import BackTop from "../BackTop";
import { RowManagerUser } from "../Styled/Dashboard.Styled";
import ManagerUserList from "./ManagerUserList";
import ManagerUserTool from "./ManagerUserTool";
import { useSelector } from "react-redux";

export default function ManagerUsers({ containerAffix}) {
    const [orderBy, setOrderBy] = useState("");
    const [searchText, setSearchText] = useState("");
    const listAllUser = useSelector((state) => state.User.listAllUser);
    

    function onChangeOrderBy(typeSort) {
        return function () {
            setOrderBy(typeSort);
        };
    }

    function onChangeSearchText(e) {
        setSearchText(e.target.value);
    }

    const listFilterSort = useMemo(
        function () {
            if (orderBy === "HV") {
                return listAllUser.filter(
                    (user) => user.maLoaiNguoiDung === "HV"
                )
            }
            if (orderBy === "GV") {
                return listAllUser.filter((user) => user.maLoaiNguoiDung === "GV")
            }
            return listAllUser
        },
        [orderBy, listAllUser]
    );

    const listFilterSearch = useMemo(
        function () {
            if (searchText === "") return listFilterSort;
            return listFilterSort.filter((user) => {
                let text = searchText.toLocaleLowerCase();
                let nameUser = user.hoTen.toLocaleLowerCase();
                return nameUser.includes(text) === true;
            });
        },
        [listFilterSort, searchText]
    );

    const listNotFilterSearch = useMemo(
        function () {
            if (searchText !== "") {
                return listFilterSort.filter((user) => {
                    let text = searchText.toLocaleLowerCase();
                    let nameUser = user.hoTen.toLocaleLowerCase();
                    return nameUser.includes(text) === false;
                });
            } else {
                return [];
            }
        },
        [listFilterSort, searchText]
    );

    
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

            <Col span={24}>
                <ManagerUserList
                    searchText={searchText}
                    listFilter={listFilterSearch}
                    listNotFilter={listNotFilterSearch}
                />
            </Col>
            <BackTop size='small' target={() => containerAffix || window} />
        </RowManagerUser>
    );
}
