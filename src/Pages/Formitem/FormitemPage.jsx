import { useParams } from "react-router-dom"

import { FormitemLazy as Lazy } from "../../Components/Formitem/FormitemLazy";
import { FormitemLargeCard as LargeCard } from "../../Components/Formitem/FormitemLargeCard";
import { FormitemCardCapsule as CardCapsule } from "../../Components/Formitem/FormitemCardCapsule";

import { 
    FormitemPageQueryAction as QueryAction,
    FormitemPageQueryActionValidator as QueryActionValidator
} from "./FormitemPageQueryAction";


export const FormitemPageContentBase = ({ formitem, children}) => {
    return (
        <LargeCard formitem={ formitem }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FormitemPageContent = ({ formitem }) => {

        return (
            <FormitemPageContentBase formitem={ formitem }>
                {/* other data */}
            </FormitemPageContentBase>        
        );    
}

const FormitemLazyPageContent = Lazy(FormitemPageContent)(QueryAction, QueryActionValidator)

export const FormitemPage = () => {
    const params = useParams()
    return (<FormitemLazyPageContent {...params} />)

}
