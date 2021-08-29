import React, { useState } from "react";
import { List, Avatar, Col, Space, Input } from "antd";
import { RowManagerUser } from "../Styled/Dashboard.Styled";
import {
    SearchOutlined,
    SortAscendingOutlined,
    SortDescendingOutlined,
} from "@ant-design/icons";
const data = [
    {
        title: "Ant Design Title 1",
    },
    {
        title: "Ant Design Title 2",
    },
    {
        title: "Ant Design Title 3",
    },
    {
        title: "Ant Design Title 4",
    },
    {
        title: "Ant Design Title 5",
    },
    {
        title: "Ant Design Title 6",
    },
    {
        title: "Ant Design Title 7",
    },
    {
        title: "Ant Design Title 8",
    },
    {
        title: "Ant Design Title 9",
    },
    {
        title: "Ant Design Title 10",
    },
    {
        title: "Ant Design Title 11",
    },
    {
        title: "Ant Design Title 12",
    },
    {
        title: "Ant Design Title 13",
    },
    {
        title: "Ant Design Title 14",
    },
];

const cssSort = {
    color: " #08979c",
    background: "#e6fffb",
};
export default function ManagerUsers() {
    const [searchText, setSearchText] = useState("");
    const [orderDir, setOrderDir] = useState("");

    function onChangeOrderDir(typeSort) {
        return function () {
            setOrderDir(typeSort);
        };
    }

    function onChangeSearchText(e) {
        setSearchText(e.target.value);
    }
    return (
        <RowManagerUser>
            <Col span={24}>
                <div className='tool'>
                    <Space size='middle'>
                        <Input
                            value={searchText}
                            allowClear
                            placeholder='Search course...'
                            bordered={false}
                            prefix={<SearchOutlined />}
                            onChange={onChangeSearchText}
                        />
                        <SortAscendingOutlined
                            style={orderDir === "asc" ? cssSort : null}
                            onClick={onChangeOrderDir("asc")}
                        />
                        <SortDescendingOutlined
                            style={orderDir === "desc" ? cssSort : null}
                            onClick={onChangeOrderDir("desc")}
                        />
                    </Space>
                </div>
            </Col>

            <Col span={24}>
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                                }
                                title={
                                    <a href='https://ant.design'>
                                        {item.title}
                                    </a>
                                }
                                description='Ant Design, a design language'
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </RowManagerUser>
    );
}
