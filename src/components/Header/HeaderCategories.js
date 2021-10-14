import React, { useState, useMemo } from "react";
import { Popover, List, Input, Empty } from "antd";
import { CaretDownOutlined, SearchOutlined, CloseOutlined } from "@ant-design/icons";
import IconSecret from "../shared/IconSecret";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";
import {
  WapperSearchCategories,
  ListCategories,
  CategoriesBtn,
} from "../Styled/Header.Styled";
export default function HeaderCategories() {
  const [searchCate, setSearchCate] = useState("");
  const listCategories = useSelector((state) => state.Categories.list);


  const categoriesFilter = useMemo(() => {
    const searchText = searchCate.toLowerCase();
    return listCategories?.reduce(
      (preValue, category) => {
        const textCategory = category.tenDanhMuc.toLowerCase();
        if (searchText !== "" && textCategory.includes(searchText)) {
          preValue.result.push(category);
        } else {
          preValue.notResult.push(category);
        }
        return preValue;
      },
      { result: [], notResult: [] }
    );
  }, [searchCate, listCategories]);

  const onChangeSearch = (e) => {
    setSearchCate(e.target.value);
  };

  const onClearTextInput = () => {
    setSearchCate("");
  };
  return (
    <div>
      <Popover
        mouseEnterDelay={0}
        placement="bottom"
        content={
          <>
            <WapperSearchCategories>
              <Input
                placeholder="Tìm kiếm danh mục..."
                value={searchCate}
                onChange={onChangeSearch}
                bordered={false}
              />
              {searchCate !== "" ? (
                <CloseOutlined className="clear" onClick={onClearTextInput} />
              ) : (
                <SearchOutlined />
              )}
            </WapperSearchCategories>

            <ListCategories>
              {searchCate !== "" && categoriesFilter.result.length === 0 && (
                <List.Item className="MenuItemEmpty">
                  <Empty
                    className="EmptyBox"
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={null}
                  />
                </List.Item>
              )}

              {categoriesFilter.result.length > 0 &&
                categoriesFilter.result.map((category, index) => {
                  return (
                    <List.Item key={index} className="MenuItemCategory">
                      <Link to={`/categories/${category.maDanhMuc}`}>
                        <IconSecret />
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={[searchCate]}
                          autoEscape={true}
                          textToHighlight={category.tenDanhMuc}
                        />
                      </Link>
                    </List.Item>
                  );
                })}
              {categoriesFilter.notResult.length > 0 &&
                categoriesFilter.notResult.map((category, index) => {
                  return (
                    <List.Item key={index} className="MenuItemCategory">
                      <Link to={`/categories/${category.maDanhMuc}`}>
                        <IconSecret /> {category.tenDanhMuc}
                      </Link>
                    </List.Item>
                  );
                })}
            </ListCategories>
          </>
        }
        // visible={true}

        overlayInnerStyle={{ borderRadius: 12 }}
      >
        <CategoriesBtn>
          Categories
          <CaretDownOutlined />
        </CategoriesBtn>
      </Popover>
    </div>
  );
}
