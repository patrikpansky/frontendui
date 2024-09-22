import { useParams } from "react-router-dom"

import { FormsectionLazy as Lazy } from "../../Components/Formsection/FormsectionLazy";
import { FormsectionLargeCard as LargeCard } from "../../Components/Formsection/FormsectionLargeCard";
import { FormsectionCardCapsule as CardCapsule } from "../../Components/Formsection/FormsectionCardCapsule";

import { 
    FormsectionPageQueryAction as QueryAction,
    FormsectionPageQueryActionValidator as QueryActionValidator
} from "./FormsectionPageQueryAction";

import { FormpartsTable as PartsTable9 } from '../../Components/Formpart/FormpartsTable';

export const FormsectionPageContentBase = ({ formsection, children}) => {
    return (
        <LargeCard formsection={ formsection }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FormsectionPageContent = ({ formsection }) => {

        return (
            <FormsectionPageContentBase formsection={ formsection }>
                {/* other data */}
                { formsection?.parts?
                    <CardCapsule formsection={ formsection } label={ "parts" }>
                        <PartsTable9 formparts={ formsection?.parts || []}/>
                    </CardCapsule>:null
                }
            </FormsectionPageContentBase>        
        );    
}

const FormsectionLazyPageContent = Lazy(FormsectionPageContent)(QueryAction, QueryActionValidator)

export const FormsectionPage = () => {
    const params = useParams()
    return (<FormsectionLazyPageContent {...params} />)

}
