import styled from "styled-components";
import { Space, List, Popover, Input } from "antd";

const { Search } = Input;
export const SearchStyled = styled(Search)`
    .ant-input-wrapper.ant-input-group {
        .ant-input-affix-wrapper {
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border-color: #cfcfcf;
            &:hover,
            &:focus-visible,
            &:focus {
                border-color: #acacac;
                outline: transparent;
                box-shadow: none;
            }
        }

        .ant-input-group-addon {
            .ant-btn.ant-input-search-button {
                background: #acacac;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
                border: unset;
                /* color: #08979c; */
                /* background: #e6fffb; */
            }
        }
    }
`;

export const ContainerHeader = styled.header`
    position: relative;
    z-index: 1001;
    background-color: #fff;
    box-shadow: 0 1px 4px #00000033;
`;

export const HeaderTop = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    @media only screen and (min-width: 768px) {
        max-width: 1200px;
    }
`;
export const WapperHeaderTop = styled.div`
    /*  */
    display: flex;
    padding: 10px;
    height: auto;
    position: relative;
    z-index: 2;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;

    .headerTop__right {
        display: flex;
        flex-grow: 1;
        -webkit-box-align: center;
        align-items: center;
        .header_logo {
            font-size: 1.8rem;
            font-weight: 600;
            margin-right: 12px;
            a {
                text-decoration: none;
                color: #484848;
            }
        }

        .header_search {
            flex-grow: 1;
        }
    }
`;

export const SpaceStyled = styled(Space)`
    flex-grow: 1;
    justify-content: flex-end;
    .ant-space-item {
        cursor: pointer;
        .cart {
            padding: 10px 30px;
            &:hover {
                background-color: rgb(0 0 0 / 3%);
                border-radius: 10px;
            }

            .anticon {
                font-size: 28px;
                color: #6f6f6f;
            }
        }

        .login {
            display: block;
            padding: 10px 30px;
            &:hover {
                background-color: rgb(0 0 0 / 3%);
                border-radius: 10px;
            }

            .anticon {
                font-size: 28px;
                color: #6f6f6f;
            }
        }

        .avatar {
            margin-left: 16px;
            padding: 4px 16px 4px 8px;
            /* background-color: rgb(0 0 0 / 3%); */
            border-radius: 40px;
            color: #08979c;
            background: #e6fffb;
            border-color: #87e8de;
            .ant-avatar {
                margin-right: 6px;
            }
            .user_name {
                font-weight: 600;
            }
        }
    }
`;

// Header User
export const PopoverWapperUserHeader = styled(Popover)``;
export const ListUserHeader = styled(List)`
    min-width: 180px;
    .ant-list-item {
        font-size: 16px;
        color: #444444;
        border-bottom: unset;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        a {
            color: #444444;
            display: flex;
            align-items: center;
        }
        .anticon {
            font-size: 18px;
            margin-right: 10px;
        }
        &.courses,
        &.setting {
            padding: 0px;
            a {
                padding: 8px 16px;
                flex-grow: 1;
            }
        }

        &.logout {
            cursor: pointer;
        }
        &:hover {
            background-color: rgb(0 0 0 / 5%);
            border-radius: 10px;
        }
        &.logout:hover {
            color: #f5222d;
            background: #fff1f0;
        }
    }
`;
