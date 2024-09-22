import { useParams } from "react-router-dom"

import { FormcategoryLazy as Lazy } from "../../Components/Formcategory/FormcategoryLazy";
import { FormcategoryLargeCard as LargeCard } from "../../Components/Formcategory/FormcategoryLargeCard";
import { FormcategoryCardCapsule as CardCapsule } from "../../Components/Formcategory/FormcategoryCardCapsule";
import { FormcategoryEditCard as EditCard } from "../../Components/Formcategory/FormcategoryEditCard";

import { 
    FormcategoryPageQueryAction as QueryAction,
    FormcategoryPageQueryActionValidator as QueryActionValidator
} from "./FormcategoryPageQueryAction";

import { FormtypesTable as FormtypesTable8 } from '../../Components/Formtype/FormtypesTable';

export const FormcategoryEditPageContentBase = ({ formcategory, children}) => {
    return (
        <LargeCard formcategory={ formcategory }>
            {/* other data */}
            <EditCard formcategory={ formcategory }/>
        </LargeCard>        
    );    
}

const FormcategoryLazyEditPageContent = Lazy(FormcategoryEditPageContentBase)(QueryAction, QueryActionValidator)

export const FormcategoryEditPage = () => {
    const params = useParams()
    return (<FormcategoryLazyEditPageContent {...params} />)

}
