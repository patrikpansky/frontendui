import { DeleteButton, CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src';
import { TrashFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { DeleteLessonAsyncAction } from '../../Queries/DeleteLessonAsyncAction';

const validatorLessonDeleteButton = CreateAsyncQueryValidator({ error: "Smazání lekce se nepovedlo", success: "Smazání lekce úspěšné" });
export const LessonDeleteButton = ({ lesson }) => {
    const dispatch = useDispatch();
    const onClick = () => {
        // console.log("LessonDeleteButton.onClick", plan)
        // console.log("LessonDeleteButton.onClick", lesson)
        const [onResolve, onReject] = validatorLessonDeleteButton(dispatch);
        dispatch(DeleteLessonAsyncAction(lesson))
            .then(onResolve, onReject);
    };
    return (
        <DeleteButton onClick={onClick}><TrashFill /></DeleteButton>
    );
};
