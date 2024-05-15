import { CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src';
import { ArrowDown } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { UpdateLessonAsyncAction } from '../../Queries/UpdateLessonAsyncAction';

const validatorLessonOrderMore = CreateAsyncQueryValidator({ error: "Nepodařilo se změnit pořadí", success: "Pořadí změněno úspěšně" });
export const LessonOrderMore = ({ lesson, plan }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        let newValue = (lesson?.order || 0) + 1;
        if (newValue !== lesson?.order) {
            const updatedLesson = { ...lesson, order: newValue };
            console.log("LessonOrderLess", updatedLesson);
            const [onResolve, onReject] = validatorLessonOrderMore(dispatch);
            dispatch(UpdateLessonAsyncAction(updatedLesson))
                .then(onResolve, onReject);
        }
    };
    return (
        <span className="btn btn-sm btn-outline-success" onClick={onClick}><ArrowDown /></span>
    );
};
