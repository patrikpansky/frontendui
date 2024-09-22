import { useParams } from "react-router-dom"

import { SurveytypeLazy as Lazy } from "../../Components/Surveytype/SurveytypeLazy";
import { SurveytypeLargeCard as LargeCard } from "../../Components/Surveytype/SurveytypeLargeCard";
import { SurveytypeCardCapsule as CardCapsule } from "../../Components/Surveytype/SurveytypeCardCapsule";
import { SurveytypeEditCard as EditCard } from "../../Components/Surveytype/SurveytypeEditCard";

import { 
    SurveytypePageQueryAction as QueryAction,
    SurveytypePageQueryActionValidator as QueryActionValidator
} from "./SurveytypePageQueryAction";


export const SurveytypeEditPageContentBase = ({ surveytype, children}) => {
    return (
        <LargeCard surveytype={ surveytype }>
            {/* other data */}
            <EditCard surveytype={ surveytype }/>
        </LargeCard>        
    );    
}

const SurveytypeLazyEditPageContent = Lazy(SurveytypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const SurveytypeEditPage = () => {
    const params = useParams()
    return (<SurveytypeLazyEditPageContent {...params} />)

}
