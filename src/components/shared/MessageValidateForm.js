import { ExclamationCircleOutlined } from "@ant-design/icons";
export const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regexSDT = /((09|03|07|08|05)+([0-9]{8})\b)/g;

export const messageTypes = {
    required: "Yêu cầu nhập trường này!",
    pattern: {
        email: "Email không hợp lệ!",
        phone: "Số điện thoại không hợp lệ!",
    },
};

export const showMessageErrorForm = (errors, nameField, typePattern = "") => {
    const typeValidate = errors && errors[nameField]?.type;
    const isRequired = typeValidate && typeValidate === "required";
    const isPattern = typeValidate && typeValidate === "pattern";

    return (
        <span
            className='message_error_form'
            style={{
                visibility: isRequired || isPattern ? "visible" : "hidden",
                color: "#ff4d4f",
                display: "block",
                marginTop: 4,
            }}
        >
            <ExclamationCircleOutlined style={{ marginRight: 4 }} />
            {isRequired ? messageTypes[typeValidate] : null}
            {isPattern && typePattern !== ""
                ? messageTypes[typeValidate][typePattern]
                : null}
        </span>
    );
};
