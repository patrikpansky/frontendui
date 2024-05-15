// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { PlanEditCard } from "../Components/Plan/PlanEditCard"
import { FetchPlanByIdAsyncAction } from "../Queries/FetchPlanByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst plán", success: "Načtení plánu se povedlo"})
export const PlanEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [plan, userPromise] = useFreshItem({id}, FetchPlanByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (plan) {
        return (
            <PlanEditCard plan={plan} />
        )
    } else {
        return (
            <div>Nahrávám plán...</div>
        )
    }
    
}