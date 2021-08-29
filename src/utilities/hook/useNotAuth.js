import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useNotAuth() {
    const history = useHistory();
    const currentUser = useSelector((state) => state.Auths.currentUser);

    useEffect(
        function () {
            if (currentUser !== null) {
                history.push("/");
            }
        },
        [currentUser, history]
    );
}
