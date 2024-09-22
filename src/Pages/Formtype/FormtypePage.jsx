import { useParams } from "react-router-dom"

import { FormtypeLazy as Lazy } from "../../Components/Formtype/FormtypeLazy";
import { FormtypeLargeCard as LargeCard } from "../../Components/Formtype/FormtypeLargeCard";
import { FormtypeCardCapsule as CardCapsule } from "../../Components/Formtype/FormtypeCardCapsule";

import { 
    FormtypePageQueryAction as QueryAction,
    FormtypePageQueryActionValidator as QueryActionValidator
} from "./FormtypePageQueryAction";

import { FormsTable as FormsTable9 } from '../../Components/Form/FormsTable';

export const FormtypePageContentBase = ({ formtype, children}) => {
    return (
        <LargeCard formtype={ formtype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FormtypePageContent = ({ formtype }) => {

        return (
            <FormtypePageContentBase formtype={ formtype }>
                {/* other data */}
                { formtype?.forms?
                    <CardCapsule formtype={ formtype } label={ "forms" }>
                        <FormsTable9 forms={ formtype?.forms || []}/>
                    </CardCapsule>:null
                }
            </FormtypePageContentBase>        
        );    
}

const FormtypeLazyPageContent = Lazy(FormtypePageContent)(QueryAction, QueryActionValidator)

export const FormtypePage = () => {
    const params = useParams()
    return (<FormtypeLazyPageContent {...params} />)

}
