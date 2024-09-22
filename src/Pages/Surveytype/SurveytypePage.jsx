import { useParams } from "react-router-dom"

import { SurveytypeLazy as Lazy } from "../../Components/Surveytype/SurveytypeLazy";
import { SurveytypeLargeCard as LargeCard } from "../../Components/Surveytype/SurveytypeLargeCard";
import { SurveytypeCardCapsule as CardCapsule } from "../../Components/Surveytype/SurveytypeCardCapsule";

import { 
    SurveytypePageQueryAction as QueryAction,
    SurveytypePageQueryActionValidator as QueryActionValidator
} from "./SurveytypePageQueryAction";


export const SurveytypePageContentBase = ({ surveytype, children}) => {
    return (
        <LargeCard surveytype={ surveytype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const SurveytypePageContent = ({ surveytype }) => {

        return (
            <SurveytypePageContentBase surveytype={ surveytype }>
                {/* other data */}
            </SurveytypePageContentBase>        
        );    
}

const SurveytypeLazyPageContent = Lazy(SurveytypePageContent)(QueryAction, QueryActionValidator)

export const SurveytypePage = () => {
    const params = useParams()
    return (<SurveytypeLazyPageContent {...params} />)

}
