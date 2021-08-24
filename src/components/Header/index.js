import React from "react";
import {
    ContainerHeader,
    HeaderTop,
    WapperHeaderTop,
} from "../StyledComponent/Header.Styled";

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

                    <div className='headerTop__left'></div>
                </WapperHeaderTop>
            </HeaderTop>
        </ContainerHeader>
    );
}
