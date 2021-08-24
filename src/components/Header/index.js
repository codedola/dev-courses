import React from "react";
import {
    SpaceStyled,
    ContainerHeader,
    HeaderTop,
    WapperHeaderTop,
} from "../StyledComponent/Header.Styled";
import { Divider, Badge, Tooltip } from "antd";
import { LoginOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
export default function Header() {
    return (
        <ContainerHeader>
            <HeaderTop>
                <WapperHeaderTop>
                    <div className='headerTop__right'>
                        <HeaderLogo />
                        <HeaderSearch />
                    </div>

                    <SpaceStyled
                        size='large'
                        split={<Divider type='vertical' />}
                    >
                        <div className='cart'>
                            <Tooltip
                                placement='bottomRight'
                                title='Khóa học ghi danh'
                            >
                                <Badge count={0} showZero overflowCount={10}>
                                    <ShoppingCartOutlined />
                                </Badge>
                            </Tooltip>
                        </div>
                        <Link to='/login' className='login'>
                            <Tooltip placement='bottomRight' title='Đăng nhập'>
                                <LoginOutlined />
                            </Tooltip>
                        </Link>
                    </SpaceStyled>
                </WapperHeaderTop>
            </HeaderTop>
        </ContainerHeader>
    );
}
