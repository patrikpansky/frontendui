import { useParams } from "react-router-dom"

import { RolecategoryLargeCard as LargeCard } from "../../Components/Rolecategory/RolecategoryLargeCard";
import { RolecategoryCardCapsule as CardCapsule } from "../../Components/Rolecategory/RolecategoryCardCapsule";
import { 
    RolecategoryLazy as Lazy,
} from "../../Components/Rolecategory/RolecategoryLazy";

import { 
    RolecategoryPageQueryAction as QueryAction,
    RolecategoryPageQueryActionValidator as QueryActionValidator
} from "./RolecategoryPageQueryAction";

// import { RoletypesCards as RoletypessCards7 } from '../../Components/Roletype/RoletypesCards';
import { RolecategoryRoletypesCardOfCards as RoletypesCards7 } from '../../Components/Rolecategory/RoletypesCardOfCards';

export const RolecategoryRoletypesPageContent = ({ rolecategory }) => {
    return (
        <LargeCard rolecategory={ rolecategory }>
            {/* other data */}
            { rolecategory?.roleTypes?
                <RoletypesCards7 rolecategory={ rolecategory }/>
                :null 
            }
        </LargeCard>        
    );    
}

const RolecategoryRoletypesLazyPageContent = Lazy(RolecategoryRoletypesPageContent)(QueryAction, QueryActionValidator)
export const RolecategoryRoletypesCardPage = () => {
    const params = useParams()
    return (<RolecategoryRoletypesLazyPageContent {...params} />)
}

