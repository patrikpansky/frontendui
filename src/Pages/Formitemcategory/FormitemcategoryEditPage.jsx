import { useParams } from "react-router-dom"

import { FormitemcategoryLazy as Lazy } from "../../Components/Formitemcategory/FormitemcategoryLazy";
import { FormitemcategoryLargeCard as LargeCard } from "../../Components/Formitemcategory/FormitemcategoryLargeCard";
import { FormitemcategoryCardCapsule as CardCapsule } from "../../Components/Formitemcategory/FormitemcategoryCardCapsule";
import { FormitemcategoryEditCard as EditCard } from "../../Components/Formitemcategory/FormitemcategoryEditCard";

import { 
    FormitemcategoryPageQueryAction as QueryAction,
    FormitemcategoryPageQueryActionValidator as QueryActionValidator
} from "./FormitemcategoryPageQueryAction";

import { FormitemtypesTable as TypesTable8 } from '../../Components/Formitemtype/FormitemtypesTable';

export const FormitemcategoryEditPageContentBase = ({ formitemcategory, children}) => {
    return (
        <LargeCard formitemcategory={ formitemcategory }>
            {/* other data */}
            <EditCard formitemcategory={ formitemcategory }/>
        </LargeCard>        
    );    
}

const FormitemcategoryLazyEditPageContent = Lazy(FormitemcategoryEditPageContentBase)(QueryAction, QueryActionValidator)

export const FormitemcategoryEditPage = () => {
    const params = useParams()
    return (<FormitemcategoryLazyEditPageContent {...params} />)

}
