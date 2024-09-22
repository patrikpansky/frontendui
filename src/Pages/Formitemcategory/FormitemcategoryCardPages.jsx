import { useParams } from "react-router-dom"

import { FormitemcategoryLargeCard as LargeCard } from "../../Components/Formitemcategory/FormitemcategoryLargeCard";
import { FormitemcategoryCardCapsule as CardCapsule } from "../../Components/Formitemcategory/FormitemcategoryCardCapsule";
import { 
    FormitemcategoryLazy as Lazy,
} from "../../Components/Formitemcategory/FormitemcategoryLazy";

import { 
    FormitemcategoryPageQueryAction as QueryAction,
    FormitemcategoryPageQueryActionValidator as QueryActionValidator
} from "./FormitemcategoryPageQueryAction";

// import { FormitemtypesCards as TypessCards8 } from '../../Components/Formitemtype/FormitemtypesCards';
import { FormitemcategoryTypesCardOfCards as TypesCards8 } from '../../Components/Formitemcategory/TypesCardOfCards';

export const FormitemcategoryTypesPageContent = ({ formitemcategory }) => {
    return (
        <LargeCard formitemcategory={ formitemcategory }>
            {/* other data */}
            { formitemcategory?.types?
                <TypesCards8 formitemcategory={ formitemcategory }/>
                :null 
            }
        </LargeCard>        
    );    
}

const FormitemcategoryTypesLazyPageContent = Lazy(FormitemcategoryTypesPageContent)(QueryAction, QueryActionValidator)
export const FormitemcategoryTypesCardPage = () => {
    const params = useParams()
    return (<FormitemcategoryTypesLazyPageContent {...params} />)
}

