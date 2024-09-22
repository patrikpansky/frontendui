import { useParams } from "react-router-dom"

import { FormitemtypeLazy as Lazy } from "../../Components/Formitemtype/FormitemtypeLazy";
import { FormitemtypeLargeCard as LargeCard } from "../../Components/Formitemtype/FormitemtypeLargeCard";
import { FormitemtypeCardCapsule as CardCapsule } from "../../Components/Formitemtype/FormitemtypeCardCapsule";

import { 
    FormitemtypePageQueryAction as QueryAction,
    FormitemtypePageQueryActionValidator as QueryActionValidator
} from "./FormitemtypePageQueryAction";


export const FormitemtypePageContentBase = ({ formitemtype, children}) => {
    return (
        <LargeCard formitemtype={ formitemtype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FormitemtypePageContent = ({ formitemtype }) => {

        return (
            <FormitemtypePageContentBase formitemtype={ formitemtype }>
                {/* other data */}
            </FormitemtypePageContentBase>        
        );    
}

const FormitemtypeLazyPageContent = Lazy(FormitemtypePageContent)(QueryAction, QueryActionValidator)

export const FormitemtypePage = () => {
    const params = useParams()
    return (<FormitemtypeLazyPageContent {...params} />)

}
