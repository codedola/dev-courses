import styled from "styled-components";


export const ContainerCourseEdit = styled.div`
    height: 100%;
    position: relative;

    .choose_course-edit {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%); */
        background-color: #08AEEA;
background-image: linear-gradient(122deg, #08AEEA 0%, #2AF598 100%);

        transition: all ease 0.2s;
        &:hover {
            transform: translate(-50%, -58%);
             box-shadow: #00b9dea8 0px 1px 2px 0px, #0093e9b8 0px 2px 12px 2px;
        }
        p {
            position: absolute;
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 22px;
            font-weight: 600;
            color: #ffffff;
        }
    }
`