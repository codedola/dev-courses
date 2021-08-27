import React from "react";
import {
    SpaceStyled,
    ContainerHeader,
    HeaderTop,
    WapperHeaderTop,
} from "../Styled/Header.Styled";
import { Divider, Tooltip } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderUser from "./HeaderUser";
import HeaderMyCourse from "./HeaderMyCourse";
export default function Header() {
    const currentUser = useSelector((state) => state.Auths.currentUser);

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
                        <HeaderMyCourse />
                        {!currentUser ? (
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
                        ) : (
                            <HeaderUser />
                        )}
                    </SpaceStyled>
                </WapperHeaderTop>
            </HeaderTop>
        </ContainerHeader>
    );
}
