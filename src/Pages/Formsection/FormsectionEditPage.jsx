import { useParams } from "react-router-dom"

import { FormsectionLazy as Lazy } from "../../Components/Formsection/FormsectionLazy";
import { FormsectionLargeCard as LargeCard } from "../../Components/Formsection/FormsectionLargeCard";
import { FormsectionCardCapsule as CardCapsule } from "../../Components/Formsection/FormsectionCardCapsule";
import { FormsectionEditCard as EditCard } from "../../Components/Formsection/FormsectionEditCard";

import { 
    FormsectionPageQueryAction as QueryAction,
    FormsectionPageQueryActionValidator as QueryActionValidator
} from "./FormsectionPageQueryAction";

import { FormpartsTable as PartsTable9 } from '../../Components/Formpart/FormpartsTable';

export const FormsectionEditPageContentBase = ({ formsection, children}) => {
    return (
        <LargeCard formsection={ formsection }>
            {/* other data */}
            <EditCard formsection={ formsection }/>
        </LargeCard>        
    );    
}

const FormsectionLazyEditPageContent = Lazy(FormsectionEditPageContentBase)(QueryAction, QueryActionValidator)

export const FormsectionEditPage = () => {
    const params = useParams()
    return (<FormsectionLazyEditPageContent {...params} />)

}
