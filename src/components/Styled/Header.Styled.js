import styled from "styled-components";
import { Space, List, Popover, Input, Empty, Modal } from "antd";

const { Search } = Input;
export const SearchStyled = styled(Search)`
    padding: 2px 0px 1px 0px;
    border: 1px solid;
    border-color: #9f9f9f;
    .ant-input-wrapper.ant-input-group {
        .ant-input-affix-wrapper {
          
            
        }

        .ant-input-group-addon {
            .ant-btn.ant-input-search-button {
               
                border: unset;
            
            }
        }
    }
`;

export const ContainerHeader = styled.header`
    position: relative;
    z-index: 1001;
    background-color: #fff;
    box-shadow: ${(props) =>
        props.isDashboard ? "unset" : "0 1px 4px #00000033"};
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
        flex-grow: 2;
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
            .ant-select {
                width: 100%;
            }
        }
    }
`;
export const WrapperSearchCategories = styled.div`
    &:hover {
        background-color: #fff;
    }
`

export const ItemIconSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 4px 10px;
    background-color: #ffffff;

    background-color: #a2dafb;
    background-image: linear-gradient(
        0deg,
        #a2dafb 0%,
        #9bf5eb 41%,
        #ffffff 97%
    );

    /*  */
    border-radius: 0px;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    /* margin-bottom: 8px; */
    transition: all 200ms ease 0s;
   color: #333;
    &:hover {
      
       transform: scale(1.04);
        box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
      
    }
    svg {
        width: 36px;
        height: 36px;
        margin-right: 4px;
    }
`;

// 

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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.filter_course {
        width: 20%;
        margin: 0;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .ant-empty-image {
            height: 40px;
            width: unset;
            margin-bottom: 0;
            .ant-empty-img-simple {
                height: 100%;
                width: 100%;
                margin: auto;
            }
        }
    }
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
        mark,
        mark.YourHighlightClass {
            padding: 4px 0px;
            color: #666666;
            background-color: #fdff81;
        }

        /*  */
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
            background: #fff;
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
        &.empty.filter {
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: column;

            .notify_empty {
                width: 100%;
                text-align: center;
                overflow: hidden;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
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
                color: #666666;
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

        &.category:hover {
            color: #08979c;
            background: #e6fffb;
            /* border-color: #87e8de; */
            /* border-bottom: #87e8de; */
        }

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

export const ModalStyled = styled(Modal)`
    z-index: 1031;
    .ant-modal-content {
        border-radius: 16px;
        .ant-modal-header {
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            padding-top: 26px;
            padding-bottom: 26px;
            .ant-modal-title {
                text-align: center;
                font-size: 18px;
            }
        }
        .ant-modal-body {
            padding: 0;
            .ant-list {
                .ant-list-item {
                    justify-content: center;
                    font-weight: 600;
                    font-size: 16px;
                    cursor: pointer;
                }

                .ant-list-item.upload {
                    color: #0095f6;
                }

                .ant-list-item.library {
                    color: #09dd09;
                }

                .ant-list-item.cancel {
                    font-weight: 400;
                }
                .ant-list-item.delete {
                    color: red;
                }
            }
        }
    }
`;
