import { CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { PlusLg } from "react-bootstrap-icons"
import { InsertLessonAsyncAction } from "../../Queries/InsertLessonAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Přidání lekce se nepovedlo", success: "Přidání lekce úspěšné"})
export const PlanAddLessonButton = ({plan, name="Nová lekce", lessontype_id="e2b7cbf6-95e1-11ed-a1eb-0242ac120002"}) => {
    const dispatch = useDispatch()
    const lessons = plan?.lessons || []
    const onClick = () => {
        const [onResolve, onReject] = validator(dispatch)
        dispatch(InsertLessonAsyncAction({name, lessontype_id, plan_id: plan.id, order: lessons.length + 1, length: 2}))
        .then(onResolve, onReject)
    }
    return (
        <button className="btn form-control btn-outline-success" onClick={onClick}><PlusLg /> Přidat lekci</button>
    )
}

