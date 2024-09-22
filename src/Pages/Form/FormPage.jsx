import { useParams } from "react-router-dom"

import { FormLazy as Lazy } from "../../Components/Form/FormLazy";
import { FormLargeCard as LargeCard } from "../../Components/Form/FormLargeCard";
import { FormCardCapsule as CardCapsule } from "../../Components/Form/FormCardCapsule";

import { 
    FormPageQueryAction as QueryAction,
    FormPageQueryActionValidator as QueryActionValidator
} from "./FormPageQueryAction";

import { FormsectionsTable as SectionsTable10 } from '../../Components/Formsection/FormsectionsTable';

export const FormPageContentBase = ({ form, children}) => {
    return (
        <LargeCard form={ form }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FormPageContent = ({ form }) => {

        return (
            <FormPageContentBase form={ form }>
                {/* other data */}
                { form?.sections?
                    <CardCapsule form={ form } label={ "sections" }>
                        <SectionsTable10 formsections={ form?.sections || []}/>
                    </CardCapsule>:null
                }
            </FormPageContentBase>        
        );    
}

const FormLazyPageContent = Lazy(FormPageContent)(QueryAction, QueryActionValidator)

export const FormPage = () => {
    const params = useParams()
    return (<FormLazyPageContent {...params} />)

}
