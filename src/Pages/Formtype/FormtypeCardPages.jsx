import { useParams } from "react-router-dom"

import { FormtypeLargeCard as LargeCard } from "../../Components/Formtype/FormtypeLargeCard";
import { FormtypeCardCapsule as CardCapsule } from "../../Components/Formtype/FormtypeCardCapsule";
import { 
    FormtypeLazy as Lazy,
} from "../../Components/Formtype/FormtypeLazy";

import { 
    FormtypePageQueryAction as QueryAction,
    FormtypePageQueryActionValidator as QueryActionValidator
} from "./FormtypePageQueryAction";

// import { FormsCards as FormssCards9 } from '../../Components/Form/FormsCards';
import { FormtypeFormsCardOfCards as FormsCards9 } from '../../Components/Formtype/FormsCardOfCards';

export const FormtypeFormsPageContent = ({ formtype }) => {
    return (
        <LargeCard formtype={ formtype }>
            {/* other data */}
            { formtype?.forms?
                <FormsCards9 formtype={ formtype }/>
                :null 
            }
        </LargeCard>        
    );    
}

const FormtypeFormsLazyPageContent = Lazy(FormtypeFormsPageContent)(QueryAction, QueryActionValidator)
export const FormtypeFormsCardPage = () => {
    const params = useParams()
    return (<FormtypeFormsLazyPageContent {...params} />)
}

