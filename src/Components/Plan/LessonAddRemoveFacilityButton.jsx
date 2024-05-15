import { CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src';
import { useDispatch } from "react-redux";
import { AddRemoveButton } from "./AddRemoveButton";
import { InsertLessonFacilityAsyncAction } from '../../Queries/InsertLessonFacilityAsyncAction';
import { DeleteLessonFacilityAsyncAction } from '../../Queries/DeleteLessonFacilityAsyncAction';

const validatorLessonAddRemoveFacilityButtonA = CreateAsyncQueryValidator({ error: "Přiřazení učebny se nepovedlo", success: "Přiřazení učebny proběhlo úspěšně" });
const validatorLessonAddRemoveFacilityButtonB = CreateAsyncQueryValidator({ error: "Odebrání učebny se nepovedlo", success: "Odebrání učebny proběhlo úspěšně" });
export const LessonAddRemoveFacilityButton = ({ lesson, facility }) => {
    const present = lesson.facilities.find(f => f.id === facility.id) ? true : false;
    const dispatch = useDispatch();
    const onChangeValue = (value) => {
        if (value) {
            const [onResolve, onReject] = validatorLessonAddRemoveFacilityButtonA(dispatch);
            dispatch(InsertLessonFacilityAsyncAction({ lesson_id: lesson.id, facility_id: facility.id }))
                .then(onResolve, onReject);
        }
        else {
            const [onResolve, onReject] = validatorLessonAddRemoveFacilityButtonB(dispatch);
            dispatch(DeleteLessonFacilityAsyncAction({ lesson_id: lesson.id, facility_id: facility.id }))
                .then(onResolve, onReject);
        }
    };
    return <AddRemoveButton state={present} onChangeValue={onChangeValue} />;
};
