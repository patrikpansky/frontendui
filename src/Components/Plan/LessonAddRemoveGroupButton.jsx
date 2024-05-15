import { CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src';
import { useDispatch } from "react-redux";
import { AddRemoveButton } from "./AddRemoveButton";
import { InsertLessonGroupAsyncAction } from '../../Queries/InsertLessonGroupAsyncAction';
import { DeleteLessonGroupAsyncAction } from '../../Queries/DeleteLessonGroupAsyncAction';

const validatorLessonAddRemoveGroupButtonA = CreateAsyncQueryValidator({ error: "Přiřazení skupiny se nepovedlo", success: "Přiřazení skupiny proběhlo úspěšně" });
const validatorLessonAddRemoveGroupButtonB = CreateAsyncQueryValidator({ error: "Odebrání skupiny se nepovedlo", success: "Odebrání skupiny proběhlo úspěšně" });
export const LessonAddRemoveGroupButton = ({ plan, lesson, group }) => {
    const present = lesson.groups.find(g => g.id === group.id) ? true : false;
    const dispatch = useDispatch();
    const onChangeValue = (value) => {
        if (value) {
            const [onResolve, onReject] = validatorLessonAddRemoveGroupButtonA(dispatch);
            dispatch(InsertLessonGroupAsyncAction({ plan_id: plan.id, lesson_id: lesson.id, group_id: group.id }))
                .then(onResolve, onReject);
        }
        else {
            const [onResolve, onReject] = validatorLessonAddRemoveGroupButtonB(dispatch);
            dispatch(DeleteLessonGroupAsyncAction({ plan_id: plan.id, lesson_id: lesson.id, group_id: group.id }))
                .then(onResolve, onReject);
        }
    };
    return <AddRemoveButton state={present} onChangeValue={onChangeValue} />;
};
