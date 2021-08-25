import React from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function HeaderSearch() {
    return (
        <div className='header__search'>
            <SearchOutlined />
            <input type='text' placeholder='Tìm kiếm khóa học...' />
        </div>
    );
}
