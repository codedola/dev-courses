import React from "react";
import { Card } from "antd";
import { CardPopularTopics } from "./PopularTopics.Styled";
import { useHistory } from "react-router-dom";
const gridStyle = {
    width: "25%",
    textAlign: "center",
};
const listTopics = [
    "JavaScript",
    "Node JS",
    "React",
    "Python",
    "Next JS",
    "PHP",
    "SQL",
    "FullStack",
];
export default function PopularTopics() {
    const history = useHistory();

    const onSearchPopularTopic = (text) => {
        return function () {
            history.push("/search?q=" + text.toLowerCase());
        };
    };
    return (
        <CardPopularTopics bordered={false} title='Popular Topics'>
            {listTopics.map(function (topic, index) {
                return (
                    <Card.Grid
                        style={gridStyle}
                        onClick={onSearchPopularTopic(topic)}
                        key={index}
                    >
                        {topic}
                    </Card.Grid>
                );
            })}
        </CardPopularTopics>
    );
}
