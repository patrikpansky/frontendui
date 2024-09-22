import { useParams } from "react-router-dom"

import { FormpartLazy as Lazy } from "../../Components/Formpart/FormpartLazy";
import { FormpartLargeCard as LargeCard } from "../../Components/Formpart/FormpartLargeCard";
import { FormpartCardCapsule as CardCapsule } from "../../Components/Formpart/FormpartCardCapsule";

import { 
    FormpartPageQueryAction as QueryAction,
    FormpartPageQueryActionValidator as QueryActionValidator
} from "./FormpartPageQueryAction";

import { FormitemsTable as ItemsTable10 } from '../../Components/Formitem/FormitemsTable';

export const FormpartPageContentBase = ({ formpart, children}) => {
    return (
        <LargeCard formpart={ formpart }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FormpartPageContent = ({ formpart }) => {

        return (
            <FormpartPageContentBase formpart={ formpart }>
                {/* other data */}
                { formpart?.items?
                    <CardCapsule formpart={ formpart } label={ "items" }>
                        <ItemsTable10 formitems={ formpart?.items || []}/>
                    </CardCapsule>:null
                }
            </FormpartPageContentBase>        
        );    
}

const FormpartLazyPageContent = Lazy(FormpartPageContent)(QueryAction, QueryActionValidator)

export const FormpartPage = () => {
    const params = useParams()
    return (<FormpartLazyPageContent {...params} />)

}
