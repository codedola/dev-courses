import React from "react";
import { useParams } from "react-router-dom";

export default function DashboardTopic() {
    const { topicTitle } = useParams();

    switch (topicTitle) {
        case "profile": {
            return <h1>profile</h1>;
        }
        case "users": {
            return <h1>users</h1>;
        }

        case "post-creation": {
            return <h1>post-creation</h1>;
        }
        case "change-password": {
            return <h1>change-password</h1>;
        }
        default: {
            return null;
        }
    }
}
