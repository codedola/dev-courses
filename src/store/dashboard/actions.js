//

export const SHOW_COURSE_CREATION = "SHOW_COURSE_CREATION";
export const CLOSE_COURSE_CREATION = "CLOSE_COURSE_CREATION";

export function actShowCourseCreation() {
    return {
        type: SHOW_COURSE_CREATION,
    };
}
export function actCloseCourseCreation() {
    return {
        type: CLOSE_COURSE_CREATION,
    };
}
