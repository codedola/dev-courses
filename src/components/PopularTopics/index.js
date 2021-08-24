import React from "react";
import { Card } from "antd";
import { CardPopularTopics } from "./PopularTopics.Styled";
const gridStyle = {
    width: "25%",
    textAlign: "center",
};
export default function PopularTopics() {
    return (
        <CardPopularTopics bordered={false} title='Popular Topics'>
            <Card.Grid style={gridStyle}>JavaScript</Card.Grid>
            <Card.Grid style={gridStyle}>NodeJS</Card.Grid>
            <Card.Grid style={gridStyle}>ReactJS</Card.Grid>
            <Card.Grid style={gridStyle}>FrondEnd</Card.Grid>
            <Card.Grid style={gridStyle}>NextJS</Card.Grid>
            <Card.Grid style={gridStyle}>Android</Card.Grid>
            <Card.Grid style={gridStyle}>SQL</Card.Grid>
            <Card.Grid style={gridStyle}>FullStack</Card.Grid>
        </CardPopularTopics>
    );
}
