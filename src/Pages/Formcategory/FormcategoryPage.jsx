import { useParams } from "react-router-dom"

import { FormcategoryLazy as Lazy } from "../../Components/Formcategory/FormcategoryLazy";
import { FormcategoryLargeCard as LargeCard } from "../../Components/Formcategory/FormcategoryLargeCard";
import { FormcategoryCardCapsule as CardCapsule } from "../../Components/Formcategory/FormcategoryCardCapsule";

import { 
    FormcategoryPageQueryAction as QueryAction,
    FormcategoryPageQueryActionValidator as QueryActionValidator
} from "./FormcategoryPageQueryAction";

import { FormtypesTable as FormtypesTable8 } from '../../Components/Formtype/FormtypesTable';

export const FormcategoryPageContentBase = ({ formcategory, children}) => {
    return (
        <LargeCard formcategory={ formcategory }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FormcategoryPageContent = ({ formcategory }) => {

        return (
            <FormcategoryPageContentBase formcategory={ formcategory }>
                {/* other data */}
                { formcategory?.formTypes?
                    <CardCapsule formcategory={ formcategory } label={ "formTypes" }>
                        <FormtypesTable8 formtypes={ formcategory?.formTypes || []}/>
                    </CardCapsule>:null
                }
            </FormcategoryPageContentBase>        
        );    
}

const FormcategoryLazyPageContent = Lazy(FormcategoryPageContent)(QueryAction, QueryActionValidator)

export const FormcategoryPage = () => {
    const params = useParams()
    return (<FormcategoryLazyPageContent {...params} />)

}
