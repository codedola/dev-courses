import React from "react";
import { List, Space, Input } from "antd";
import {
    SearchOutlined,
    SortAscendingOutlined,
    SortDescendingOutlined,
} from "@ant-design/icons";

const cssSort = {
    color: " #08979c",
    background: "#e6fffb",
};
export default function HeaderMyCourseTool({
    searchText,
    orderDir,
    onChangeSearchText,
    onChangeOrderDir,
}) {
    return (
        <List.Item className='tool'>
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
        </List.Item>
    );
}
