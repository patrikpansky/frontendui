import { useParams } from "react-router-dom"

import { FormitemLazy as Lazy } from "../../Components/Formitem/FormitemLazy";
import { FormitemLargeCard as LargeCard } from "../../Components/Formitem/FormitemLargeCard";
import { FormitemCardCapsule as CardCapsule } from "../../Components/Formitem/FormitemCardCapsule";
import { FormitemEditCard as EditCard } from "../../Components/Formitem/FormitemEditCard";

import { 
    FormitemPageQueryAction as QueryAction,
    FormitemPageQueryActionValidator as QueryActionValidator
} from "./FormitemPageQueryAction";


export const FormitemEditPageContentBase = ({ formitem, children}) => {
    return (
        <LargeCard formitem={ formitem }>
            {/* other data */}
            <EditCard formitem={ formitem }/>
        </LargeCard>        
    );    
}

const FormitemLazyEditPageContent = Lazy(FormitemEditPageContentBase)(QueryAction, QueryActionValidator)

export const FormitemEditPage = () => {
    const params = useParams()
    return (<FormitemLazyEditPageContent {...params} />)

}
