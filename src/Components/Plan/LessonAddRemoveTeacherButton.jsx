import { AddRemoveButton } from "./AddRemoveButton"
import { CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { InsertTeacherAsyncAction } from "../../Queries/InsertTeacherAsyncAction"
import { DeleteTeacherAsyncAction } from "../../Queries/DeleteTeacherAsyncAction"

const validatorAdd = CreateAsyncQueryValidator({error: "Přiřazení vyučujícícho se nepovedlo", success: "Přiřazení vyučujícícho proběhlo úspěšně"})
const validatorRemove = CreateAsyncQueryValidator({error: "Odebrání vyučujícícho se nepovedlo", success: "Odebrání vyučujícícho proběhlo úspěšně"})
export const LessonAddRemoveTeacherButton = ({ lesson, user}) => {
    const present = lesson.users.find(u => u.id === user.id)? true: false
    const dispatch = useDispatch()
    const onChangeValue = (value) => {
        if (value) {
            const [onResolve, onReject] = validatorAdd(dispatch)
            dispatch(InsertTeacherAsyncAction({ lesson_id: lesson.id, user_id: user.id}))
            .then(onResolve, onReject)
        } 
        else {
            const [onResolve, onReject] = validatorRemove(dispatch)
            dispatch(DeleteTeacherAsyncAction({ lesson_id: lesson.id, user_id: user.id}))
            .then(onResolve, onReject)

        }
    }
    return <AddRemoveButton state={present} onChangeValue={onChangeValue}/>
}