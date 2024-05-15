import { CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src';
import { ArrowUp } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { UpdateLessonAsyncAction } from '../../Queries/UpdateLessonAsyncAction';

const validatorLessonOrderLess = CreateAsyncQueryValidator({ error: "Nepodařilo se změnit pořadí", success: "Pořadí změněno úspěšně" });
export const LessonOrderLess = ({ lesson }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        let newValue = (lesson?.order || 0) - 1;
        if (newValue < 1) {
            newValue = 1;
        }
        if (newValue !== lesson?.order) {
            const updatedLesson = { ...lesson, order: newValue };
            console.log("LessonOrderLess", updatedLesson);
            const [onResolve, onReject] = validatorLessonOrderLess(dispatch);
            dispatch(UpdateLessonAsyncAction(updatedLesson))
                .then(onResolve, onReject);
        }
    };
    return (
        <span className="btn btn-sm btn-outline-success" onClick={onClick}><ArrowUp /></span>
    );
};
