import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//
export default function useAuth() {
    const history = useHistory();
    const token = useSelector((state) => state.Auths.accessToken);

    useEffect(
        function () {
            if (!token || token === "") {
                history.push("/login");
            }
        },
        [token, history]
    );
}
