import styled from "styled-components";

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

    .headerTop__right {
        display: flex;
        flex: 1 1 0%;
        -webkit-box-align: center;
        align-items: center;
        .header_logo {
            font-size: 2rem;
            font-weight: 600;
            margin-right: 30px;
            a {
                text-decoration: none;
                color: #484848;
            }
        }

        .header__search {
            padding: 8px 10px;
            background-color: #f3f3f3;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 34px;
            padding: 6px 24px;
            input {
                border: unset;
                font-size: 1.2rem;
                color: #484848;
                border-radius: 10px;

                background-color: #f3f3f3;
                &:active,
                &:focus-visible {
                    outline: unset;
                }
            }

            .anticon {
                font-size: 1.4rem;
                color: gray;
            }
        }
    }
`;
