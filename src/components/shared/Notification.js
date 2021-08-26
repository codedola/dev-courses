import { notification } from "antd";

export const typeNotify = {
    success: "success",
    info: "info",
    warning: "warning",
    error: "error",
};

export const typePlacement = {
    topRight: "topRight",
    bottomRight: "bottomRight",
    bottomLeft: "bottomLeft",
    topLeft: "topLeft",
};

export function showNotification({
    type = typeNotify.success,
    message = "Notification Title",
    description = "Hello World !",
    placement = typePlacement.topRight,
    duration = 2,
} = {}) {
    return notification[type]({
        message,
        description,
        placement,
        duration,
        style: { borderRadius: 10, padding: "20px 24px" },
    });
}
