import { useParams } from "react-router-dom"

import { FormcategoryLargeCard as LargeCard } from "../../Components/Formcategory/FormcategoryLargeCard";
import { FormcategoryCardCapsule as CardCapsule } from "../../Components/Formcategory/FormcategoryCardCapsule";
import { 
    FormcategoryLazy as Lazy,
} from "../../Components/Formcategory/FormcategoryLazy";

import { 
    FormcategoryPageQueryAction as QueryAction,
    FormcategoryPageQueryActionValidator as QueryActionValidator
} from "./FormcategoryPageQueryAction";

// import { FormtypesCards as FormtypessCards8 } from '../../Components/Formtype/FormtypesCards';
import { FormcategoryFormtypesCardOfCards as FormtypesCards8 } from '../../Components/Formcategory/FormtypesCardOfCards';

export const FormcategoryFormtypesPageContent = ({ formcategory }) => {
    return (
        <LargeCard formcategory={ formcategory }>
            {/* other data */}
            { formcategory?.formTypes?
                <FormtypesCards8 formcategory={ formcategory }/>
                :null 
            }
        </LargeCard>        
    );    
}

const FormcategoryFormtypesLazyPageContent = Lazy(FormcategoryFormtypesPageContent)(QueryAction, QueryActionValidator)
export const FormcategoryFormtypesCardPage = () => {
    const params = useParams()
    return (<FormcategoryFormtypesLazyPageContent {...params} />)
}

