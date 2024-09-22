import { useParams } from "react-router-dom"

import { RolecategoryLazy as Lazy } from "../../Components/Rolecategory/RolecategoryLazy";
import { RolecategoryLargeCard as LargeCard } from "../../Components/Rolecategory/RolecategoryLargeCard";
import { RolecategoryCardCapsule as CardCapsule } from "../../Components/Rolecategory/RolecategoryCardCapsule";

import { 
    RolecategoryPageQueryAction as QueryAction,
    RolecategoryPageQueryActionValidator as QueryActionValidator
} from "./RolecategoryPageQueryAction";

import { RoletypesTable as RoletypesTable7 } from '../../Components/Roletype/RoletypesTable';

export const RolecategoryPageContentBase = ({ rolecategory, children}) => {
    return (
        <LargeCard rolecategory={ rolecategory }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const RolecategoryPageContent = ({ rolecategory }) => {

        return (
            <RolecategoryPageContentBase rolecategory={ rolecategory }>
                {/* other data */}
                { rolecategory?.roleTypes?
                    <CardCapsule rolecategory={ rolecategory } label={ "roleTypes" }>
                        <RoletypesTable7 roletypes={ rolecategory?.roleTypes || []}/>
                    </CardCapsule>:null
                }
            </RolecategoryPageContentBase>        
        );    
}

const RolecategoryLazyPageContent = Lazy(RolecategoryPageContent)(QueryAction, QueryActionValidator)

export const RolecategoryPage = () => {
    const params = useParams()
    return (<RolecategoryLazyPageContent {...params} />)

}
