import { useParams } from "react-router-dom"

import { RolecategoryLazy as Lazy } from "../../Components/Rolecategory/RolecategoryLazy";
import { RolecategoryLargeCard as LargeCard } from "../../Components/Rolecategory/RolecategoryLargeCard";
import { RolecategoryCardCapsule as CardCapsule } from "../../Components/Rolecategory/RolecategoryCardCapsule";
import { RolecategoryEditCard as EditCard } from "../../Components/Rolecategory/RolecategoryEditCard";

import { 
    RolecategoryPageQueryAction as QueryAction,
    RolecategoryPageQueryActionValidator as QueryActionValidator
} from "./RolecategoryPageQueryAction";

import { RoletypesTable as RoletypesTable7 } from '../../Components/Roletype/RoletypesTable';

export const RolecategoryEditPageContentBase = ({ rolecategory, children}) => {
    return (
        <LargeCard rolecategory={ rolecategory }>
            {/* other data */}
            <EditCard rolecategory={ rolecategory }/>
        </LargeCard>        
    );    
}

const RolecategoryLazyEditPageContent = Lazy(RolecategoryEditPageContentBase)(QueryAction, QueryActionValidator)

export const RolecategoryEditPage = () => {
    const params = useParams()
    return (<RolecategoryLazyEditPageContent {...params} />)

}
