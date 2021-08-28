import styled from "styled-components";
import { Space, List, Popover, Input, Empty } from "antd";

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
                color: #747474;
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

// Header My Course
export const EmptyMyCourse = styled(Empty)`
    .ant-empty-image {
        width: 300px;
        height: 80px;
        .ant-empty-img-simple {
            width: 50%;
            height: 80%;
        }
    }
    .ant-empty-description {
        font-size: 16px;
    }
`;
export const ListMyCoursesHeader = styled(List)`
    max-width: 368px;
    max-height: 480px;
    overflow-y: scroll;
    &::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
        background-color: transparent;
    }

    &::-webkit-scrollbar {
        width: 4px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }
    .ant-list-item {
        justify-content: flex-start;
        flex-wrap: nowrap;
        position: relative;

        margin-bottom: 8px;

        border-radius: 4px;
        padding-left: 8px;
        padding-right: 8px;
        &:hover {
            /* background: #f6f6f6; */
        }
        /* Tool - Search - Sort */
        &.tool {
            cursor: auto;
            .ant-input-affix-wrapper {
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                padding-top: 6px;
                padding-bottom: 6px;
                .ant-input-prefix {
                    color: #e0e0e0;
                    margin-right: 6px;
                }
                .ant-input {
                    color: #757575;
                }
            }
            .anticon-sort-ascending,
            .anticon-sort-descending {
                display: block;
                cursor: pointer;
                padding: 6px 12px;
                border-radius: 8px;
                color: #989898;
                background: #00000005;
                font-size: 18px;
                &:hover {
                    background: rgb(251 251 251);
                }
            }
        }
        &.tool:hover {
            background: unset;
        }
        &.empty:hover {
            background: unset;
        }

        /* Content Course Regsiter */
        .ant-image {
            margin-right: 10px;
            display: flex;
            .ant-image-img {
                height: 60px;
                width: 100px;
                object-fit: cover;
            }
        }
        .course_info {
            display: flex;
            flex-direction: column;
            /* padding-right: 2px; */
            .title {
                margin-bottom: 0;
                font-size: 14px;
                color: #4e4e4e;
                font-weight: 600;
                padding-right: 6px;
                cursor: pointer;
                /*  */
                display: -webkit-box !important;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
            }
            .description {
                margin-bottom: 0;
                font-size: 14px;
                color: #9c9c9c;
                /*  */
                display: -webkit-box !important;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
            }
        }

        .handle_course {
            position: absolute;
            cursor: pointer;
            color: #d5d5d5;
            border-radius: 4px;
            top: 0;
            right: 0px;
            font-size: 16px;
            /* padding: 0px 2px 4px 6px; */
            transition: all ease 0.2s;
            &:hover {
                color: #afafaf;
            }
        }
    }
`;

export const ListHandleRegisterCourse = styled(List)`
    .ant-list-item {
        margin-bottom: 6px;
        /* border-bottom: unset; */
        background: #f8f8f8;
        color: #909090;
        font-size: 12px;
        padding: 4px 12px;
        border-radius: 4px;
        border: 1px solid transparent;
        font-weight: 600;
        cursor: pointer;
        transition: all ease 0.2s;
        &.delete {
            margin-bottom: 0px;
        }
        &.read_more:hover {
            color: #46b815;
            /* border: 1px solid #b7eb8f; */
            background: #f6ffed;
        }

        &.delete:hover {
            color: #cf1322;
            background: #fff1f0;
            /* border: 1px solid #ffa39e; */
        }
    }
`;
