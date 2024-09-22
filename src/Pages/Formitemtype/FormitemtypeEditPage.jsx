import { useParams } from "react-router-dom"

import { FormitemtypeLazy as Lazy } from "../../Components/Formitemtype/FormitemtypeLazy";
import { FormitemtypeLargeCard as LargeCard } from "../../Components/Formitemtype/FormitemtypeLargeCard";
import { FormitemtypeCardCapsule as CardCapsule } from "../../Components/Formitemtype/FormitemtypeCardCapsule";
import { FormitemtypeEditCard as EditCard } from "../../Components/Formitemtype/FormitemtypeEditCard";

import { 
    FormitemtypePageQueryAction as QueryAction,
    FormitemtypePageQueryActionValidator as QueryActionValidator
} from "./FormitemtypePageQueryAction";


export const FormitemtypeEditPageContentBase = ({ formitemtype, children}) => {
    return (
        <LargeCard formitemtype={ formitemtype }>
            {/* other data */}
            <EditCard formitemtype={ formitemtype }/>
        </LargeCard>        
    );    
}

const FormitemtypeLazyEditPageContent = Lazy(FormitemtypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const FormitemtypeEditPage = () => {
    const params = useParams()
    return (<FormitemtypeLazyEditPageContent {...params} />)

}
