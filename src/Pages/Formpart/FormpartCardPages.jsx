import { useParams } from "react-router-dom"

import { FormpartLargeCard as LargeCard } from "../../Components/Formpart/FormpartLargeCard";
import { FormpartCardCapsule as CardCapsule } from "../../Components/Formpart/FormpartCardCapsule";
import { 
    FormpartLazy as Lazy,
} from "../../Components/Formpart/FormpartLazy";

import { 
    FormpartPageQueryAction as QueryAction,
    FormpartPageQueryActionValidator as QueryActionValidator
} from "./FormpartPageQueryAction";

// import { FormitemsCards as ItemssCards10 } from '../../Components/Formitem/FormitemsCards';
import { FormpartItemsCardOfCards as ItemsCards10 } from '../../Components/Formpart/ItemsCardOfCards';

export const FormpartItemsPageContent = ({ formpart }) => {
    return (
        <LargeCard formpart={ formpart }>
            {/* other data */}
            { formpart?.items?
                <ItemsCards10 formpart={ formpart }/>
                :null 
            }
        </LargeCard>        
    );    
}

const FormpartItemsLazyPageContent = Lazy(FormpartItemsPageContent)(QueryAction, QueryActionValidator)
export const FormpartItemsCardPage = () => {
    const params = useParams()
    return (<FormpartItemsLazyPageContent {...params} />)
}

