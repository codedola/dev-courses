import React from "react";
import { SearchStyled } from "../Styled/Header.Styled";
import { useHistory } from "react-router-dom";
export default function HeaderSearch() {
    const history = useHistory();
    const onSearch = (value) => {
        if (value.trim() !== "") {
            history.push(`/search?q=${value}`);
        }
    };

    return (
        <div className='header_search'>
            <SearchStyled
                placeholder='Tìm kiếm khóa khọc...'
                allowClear
                size='large'
                onSearch={onSearch}
                bordered={false}
            />
        </div>
    );
}
