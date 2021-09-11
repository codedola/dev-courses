import React from "react";
import {
    TuDuyIcon,
    FrondEndIcon,
    BackendIcon,
    DiDongIcon,
    FullStackIcon,
    DesignIcon,
} from "../shared/TaskbarIcon";
import { ItemIconStyled, RowManagerCategory } from "../Styled/Dashboard.Styled";
import { Col } from "antd";
export const listIcons = [
    {
        name: "TuDuy",
        icon: <TuDuyIcon />,
    },
    {
        name: "FrondEnd",
        icon: <FrondEndIcon />,
    },
    {
        name: "BackEnd",
        icon: <BackendIcon />,
    },
    {
        name: "Design",
        icon: <DesignIcon />,
    },
    {
        name: "Mobile",
        icon: <DiDongIcon />,
    },
    {
        name: "FullStack",
        icon: <FullStackIcon />,
    },
];
export default function ManagerCategories() {
    return (
        <RowManagerCategory gutter={[8, 12]} justify='center'>
            {listIcons.map(function (item, index) {
                return (
                    <Col lg={8} key={index}>
                        <ItemIconStyled>
                            {item.icon}
                            <p style={{ marginBottom: 0 }}>{item.name}</p>
                        </ItemIconStyled>
                    </Col>
                );
            })}
        </RowManagerCategory>
    );
}
