import { DeleteButton, CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src';
import { TrashFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { DeleteLessonAsyncAction } from '../../Queries/DeleteLessonAsyncAction';

const validatorLessonDeleteButton = CreateAsyncQueryValidator({ error: "Smazání lekce se nepovedlo", success: "Smazání lekce úspěšné" });
export const LessonDeleteButton = ({ lesson, plan }) => {
    const dispatch = useDispatch();
    const onClick = () => {
        // console.log("LessonDeleteButton.onClick", plan)
        // console.log("LessonDeleteButton.onClick", lesson)
        const [onResolve, onReject] = validatorLessonDeleteButton(dispatch);
        dispatch(DeleteLessonAsyncAction({ plan_id: plan.id, lesson_id: lesson.id, lastchange: lesson.lastchange }))
            .then(onResolve, onReject);
    };
    return (
        <DeleteButton onClick={onClick}><TrashFill /></DeleteButton>
    );
};
