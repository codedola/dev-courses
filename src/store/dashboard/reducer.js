import { SHOW_COURSE_CREATION, CLOSE_COURSE_CREATION } from "./actions";

const initialState = {
    showCourseCreation: false,
};

export default function dashboardReducer(
    stateDashboard = initialState,
    action
) {
    switch (action.type) {
        case SHOW_COURSE_CREATION: {
            return {
                ...stateDashboard,
                showCourseCreation: true,
            };
        }

        case CLOSE_COURSE_CREATION: {
            return {
                ...stateDashboard,
                showCourseCreation: false,
            };
        }

        default: {
            return stateDashboard;
        }
    }
}
