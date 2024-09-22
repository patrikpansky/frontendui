import { useParams } from "react-router-dom"

import { FormLargeCard as LargeCard } from "../../Components/Form/FormLargeCard";
import { FormCardCapsule as CardCapsule } from "../../Components/Form/FormCardCapsule";
import { 
    FormLazy as Lazy,
} from "../../Components/Form/FormLazy";

import { 
    FormPageQueryAction as QueryAction,
    FormPageQueryActionValidator as QueryActionValidator
} from "./FormPageQueryAction";

// import { FormsectionsCards as SectionssCards10 } from '../../Components/Formsection/FormsectionsCards';
import { FormSectionsCardOfCards as SectionsCards10 } from '../../Components/Form/SectionsCardOfCards';

export const FormSectionsPageContent = ({ form }) => {
    return (
        <LargeCard form={ form }>
            {/* other data */}
            { form?.sections?
                <SectionsCards10 form={ form }/>
                :null 
            }
        </LargeCard>        
    );    
}

const FormSectionsLazyPageContent = Lazy(FormSectionsPageContent)(QueryAction, QueryActionValidator)
export const FormSectionsCardPage = () => {
    const params = useParams()
    return (<FormSectionsLazyPageContent {...params} />)
}

