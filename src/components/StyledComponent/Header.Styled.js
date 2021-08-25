import styled from "styled-components";
import { Space } from "antd";
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

        .header__search {
            flex-grow: 1;
            padding: 8px 12px;
            background-color: #f0f2f5;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-radius: 60px;
            overflow: hidden;
            /* border: 1px solid #ccccccbf; */
            input {
                flex-grow: 1;
                border: unset;
                font-size: 1rem;
                color: #484848;
                border-radius: 10px;

                background-color: #f0f2f5;
                &:active,
                &:focus-visible {
                    outline: unset;
                }
            }

            .anticon {
                font-size: 1.4rem;
                color: gray;
                margin-right: 16px;
            }
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
    }
`;
