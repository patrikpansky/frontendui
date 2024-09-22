import { useParams } from "react-router-dom"

import { GroupcategoryLargeCard as LargeCard } from "../../Components/Groupcategory/GroupcategoryLargeCard";
import { GroupcategoryCardCapsule as CardCapsule } from "../../Components/Groupcategory/GroupcategoryCardCapsule";
import { 
    GroupcategoryLazy as Lazy,
} from "../../Components/Groupcategory/GroupcategoryLazy";

import { 
    GroupcategoryPageQueryAction as QueryAction,
    GroupcategoryPageQueryActionValidator as QueryActionValidator
} from "./GroupcategoryPageQueryAction";

// import { GrouptypesCards as TypessCards8 } from '../../Components/Grouptype/GrouptypesCards';
import { GroupcategoryTypesCardOfCards as TypesCards8 } from '../../Components/Groupcategory/TypesCardOfCards';

export const GroupcategoryTypesPageContent = ({ groupcategory }) => {
    return (
        <LargeCard groupcategory={ groupcategory }>
            {/* other data */}
            { groupcategory?.types?
                <TypesCards8 groupcategory={ groupcategory }/>
                :null 
            }
        </LargeCard>        
    );    
}

const GroupcategoryTypesLazyPageContent = Lazy(GroupcategoryTypesPageContent)(QueryAction, QueryActionValidator)
export const GroupcategoryTypesCardPage = () => {
    const params = useParams()
    return (<GroupcategoryTypesLazyPageContent {...params} />)
}

