import { useParams } from "react-router-dom"

import { FormsectionLargeCard as LargeCard } from "../../Components/Formsection/FormsectionLargeCard";
import { FormsectionCardCapsule as CardCapsule } from "../../Components/Formsection/FormsectionCardCapsule";
import { 
    FormsectionLazy as Lazy,
} from "../../Components/Formsection/FormsectionLazy";

import { 
    FormsectionPageQueryAction as QueryAction,
    FormsectionPageQueryActionValidator as QueryActionValidator
} from "./FormsectionPageQueryAction";

// import { FormpartsCards as PartssCards9 } from '../../Components/Formpart/FormpartsCards';
import { FormsectionPartsCardOfCards as PartsCards9 } from '../../Components/Formsection/PartsCardOfCards';

export const FormsectionPartsPageContent = ({ formsection }) => {
    return (
        <LargeCard formsection={ formsection }>
            {/* other data */}
            { formsection?.parts?
                <PartsCards9 formsection={ formsection }/>
                :null 
            }
        </LargeCard>        
    );    
}

const FormsectionPartsLazyPageContent = Lazy(FormsectionPartsPageContent)(QueryAction, QueryActionValidator)
export const FormsectionPartsCardPage = () => {
    const params = useParams()
    return (<FormsectionPartsLazyPageContent {...params} />)
}

