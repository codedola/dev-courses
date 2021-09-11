import { notification } from "antd";
import styled from "styled-components";
import { CloseOutlined} from "@ant-design/icons";

export const CloseIconStyled = styled(CloseOutlined)`
   display: block;
    padding: 8px;
    background-color: #ffffff;
    color: #9e9e9e;
    border-radius: 50%;
    box-shadow: rgb(171 171 171 / 8%) 0px 2px 6px, rgb(193 193 193 / 16%) 0px 2px 10px;

    position: absolute;
    top: -8px;
    right: -12px;
`
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
    description = "",
    placement = typePlacement.topRight,
    duration = 2,
    ...restParam
} = {}) {
    return notification[type]({
        message,
        description,
        placement,
        duration,
        style: { borderRadius: 10, padding: "20px 24px 20px 8px", position: "relative" },
        closeIcon: <CloseIconStyled />,
        ...restParam
    });
}
