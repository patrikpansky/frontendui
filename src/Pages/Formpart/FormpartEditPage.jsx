import { useParams } from "react-router-dom"

import { FormpartLazy as Lazy } from "../../Components/Formpart/FormpartLazy";
import { FormpartLargeCard as LargeCard } from "../../Components/Formpart/FormpartLargeCard";
import { FormpartCardCapsule as CardCapsule } from "../../Components/Formpart/FormpartCardCapsule";
import { FormpartEditCard as EditCard } from "../../Components/Formpart/FormpartEditCard";

import { 
    FormpartPageQueryAction as QueryAction,
    FormpartPageQueryActionValidator as QueryActionValidator
} from "./FormpartPageQueryAction";

import { FormitemsTable as ItemsTable10 } from '../../Components/Formitem/FormitemsTable';

export const FormpartEditPageContentBase = ({ formpart, children}) => {
    return (
        <LargeCard formpart={ formpart }>
            {/* other data */}
            <EditCard formpart={ formpart }/>
        </LargeCard>        
    );    
}

const FormpartLazyEditPageContent = Lazy(FormpartEditPageContentBase)(QueryAction, QueryActionValidator)

export const FormpartEditPage = () => {
    const params = useParams()
    return (<FormpartLazyEditPageContent {...params} />)

}
