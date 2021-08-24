import { GET_LIST_CATEGORIES } from "./actions";

const initialState = {
    list: [],
};

export default function CategoriesReducer(
    stateCategoris = initialState,
    action
) {
    switch (action.type) {
        case GET_LIST_CATEGORIES: {
            const { list } = action.payload;
            return {
                ...stateCategoris,
                list,
            };
        }

        default: {
            return stateCategoris;
        }
    }
}
