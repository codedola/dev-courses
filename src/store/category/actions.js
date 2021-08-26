import { CategoriesService } from "../../services/categories";

export const GET_LIST_CATEGORIES = "GET_LIST_CATEGORIES";

export function actGetListCategories(list) {
    return {
        type: GET_LIST_CATEGORIES,
        payload: {
            list,
        },
    };
}

export function actGetListCategoriesAsync() {
    return async function (dispatch) {
        try {
            const response = await CategoriesService.GetList();
            if (response.status === 200) {
                const list = response.data;
                dispatch(actGetListCategories(list));
            }
        } catch (error) {}
    };
}
