import React from "react";
import { Skeleton } from "antd";
import { CardStyled, WapperCardItem } from "../StyledComponent/Card.Styled";

export default function CourseItemSkeleton() {
    return (
        <WapperCardItem>
            <CardStyled hoverable>
                <Skeleton active paragraph={{ rows: 6 }} />
            </CardStyled>
        </WapperCardItem>
    );
}
