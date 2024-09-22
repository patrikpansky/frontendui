import { useParams } from "react-router-dom"

import { FormLazy as Lazy } from "../../Components/Form/FormLazy";
import { FormLargeCard as LargeCard } from "../../Components/Form/FormLargeCard";
import { FormCardCapsule as CardCapsule } from "../../Components/Form/FormCardCapsule";
import { FormEditCard as EditCard } from "../../Components/Form/FormEditCard";

import { 
    FormPageQueryAction as QueryAction,
    FormPageQueryActionValidator as QueryActionValidator
} from "./FormPageQueryAction";

import { FormsectionsTable as SectionsTable10 } from '../../Components/Formsection/FormsectionsTable';

export const FormEditPageContentBase = ({ form, children}) => {
    return (
        <LargeCard form={ form }>
            {/* other data */}
            <EditCard form={ form }/>
        </LargeCard>        
    );    
}

const FormLazyEditPageContent = Lazy(FormEditPageContentBase)(QueryAction, QueryActionValidator)

export const FormEditPage = () => {
    const params = useParams()
    return (<FormLazyEditPageContent {...params} />)

}
