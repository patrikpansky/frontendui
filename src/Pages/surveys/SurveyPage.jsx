// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { SurveyLargeCard } from "../../Components/Survey/SurveyLargeCard"
import { SurveysAsyncActions } from "../../Queries/_surveys"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst anketu", success: "Načtení ankety se povedlo"})
export const SurveyPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [survey, promise] = useFreshItem({id}, SurveysAsyncActions.read)
    promise.then(onResolve, onReject)

    if (survey) {
        return (
            <SurveyLargeCard survey={survey} />
        )
    } else {
        return (
            <div>Nahrávám anketu...</div>
        )
    }
    
}