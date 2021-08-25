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
                        size='small'
                        split={<Divider type='vertical' />}
                    >
                        <Tooltip
                            placement='bottomRight'
                            title='Khóa học ghi danh'
                            mouseEnterDelay={0}
                            mouseLeaveDelay={0}
                        >
                            <div className='cart'>
                                <Badge count={0} showZero overflowCount={10}>
                                    <ShoppingCartOutlined />
                                </Badge>
                            </div>
                        </Tooltip>
                        <Tooltip
                            placement='bottomRight'
                            title='Đăng nhập'
                            mouseEnterDelay={0}
                            mouseLeaveDelay={0}
                        >
                            <Link to='/login' className='login'>
                                <LoginOutlined />
                            </Link>
                        </Tooltip>
                    </SpaceStyled>
                </WapperHeaderTop>
            </HeaderTop>
        </ContainerHeader>
    );
}
