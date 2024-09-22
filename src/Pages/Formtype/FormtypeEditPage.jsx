import { useParams } from "react-router-dom"

import { FormtypeLazy as Lazy } from "../../Components/Formtype/FormtypeLazy";
import { FormtypeLargeCard as LargeCard } from "../../Components/Formtype/FormtypeLargeCard";
import { FormtypeCardCapsule as CardCapsule } from "../../Components/Formtype/FormtypeCardCapsule";
import { FormtypeEditCard as EditCard } from "../../Components/Formtype/FormtypeEditCard";

import { 
    FormtypePageQueryAction as QueryAction,
    FormtypePageQueryActionValidator as QueryActionValidator
} from "./FormtypePageQueryAction";

import { FormsTable as FormsTable9 } from '../../Components/Form/FormsTable';

export const FormtypeEditPageContentBase = ({ formtype, children}) => {
    return (
        <LargeCard formtype={ formtype }>
            {/* other data */}
            <EditCard formtype={ formtype }/>
        </LargeCard>        
    );    
}

const FormtypeLazyEditPageContent = Lazy(FormtypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const FormtypeEditPage = () => {
    const params = useParams()
    return (<FormtypeLazyEditPageContent {...params} />)

}
