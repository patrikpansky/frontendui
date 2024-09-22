import { useParams } from "react-router-dom"

import { FormitemcategoryLazy as Lazy } from "../../Components/Formitemcategory/FormitemcategoryLazy";
import { FormitemcategoryLargeCard as LargeCard } from "../../Components/Formitemcategory/FormitemcategoryLargeCard";
import { FormitemcategoryCardCapsule as CardCapsule } from "../../Components/Formitemcategory/FormitemcategoryCardCapsule";

import { 
    FormitemcategoryPageQueryAction as QueryAction,
    FormitemcategoryPageQueryActionValidator as QueryActionValidator
} from "./FormitemcategoryPageQueryAction";

import { FormitemtypesTable as TypesTable8 } from '../../Components/Formitemtype/FormitemtypesTable';

export const FormitemcategoryPageContentBase = ({ formitemcategory, children}) => {
    return (
        <LargeCard formitemcategory={ formitemcategory }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FormitemcategoryPageContent = ({ formitemcategory }) => {

        return (
            <FormitemcategoryPageContentBase formitemcategory={ formitemcategory }>
                {/* other data */}
                { formitemcategory?.types?
                    <CardCapsule formitemcategory={ formitemcategory } label={ "types" }>
                        <TypesTable8 formitemtypes={ formitemcategory?.types || []}/>
                    </CardCapsule>:null
                }
            </FormitemcategoryPageContentBase>        
        );    
}

const FormitemcategoryLazyPageContent = Lazy(FormitemcategoryPageContent)(QueryAction, QueryActionValidator)

export const FormitemcategoryPage = () => {
    const params = useParams()
    return (<FormitemcategoryLazyPageContent {...params} />)

}
