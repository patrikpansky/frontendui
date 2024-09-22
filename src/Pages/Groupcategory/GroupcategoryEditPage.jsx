import { useParams } from "react-router-dom"

import { GroupcategoryLazy as Lazy } from "../../Components/Groupcategory/GroupcategoryLazy";
import { GroupcategoryLargeCard as LargeCard } from "../../Components/Groupcategory/GroupcategoryLargeCard";
import { GroupcategoryCardCapsule as CardCapsule } from "../../Components/Groupcategory/GroupcategoryCardCapsule";
import { GroupcategoryEditCard as EditCard } from "../../Components/Groupcategory/GroupcategoryEditCard";

import { 
    GroupcategoryPageQueryAction as QueryAction,
    GroupcategoryPageQueryActionValidator as QueryActionValidator
} from "./GroupcategoryPageQueryAction";

import { GrouptypesTable as TypesTable8 } from '../../Components/Grouptype/GrouptypesTable';

export const GroupcategoryEditPageContentBase = ({ groupcategory, children}) => {
    return (
        <LargeCard groupcategory={ groupcategory }>
            {/* other data */}
            <EditCard groupcategory={ groupcategory }/>
        </LargeCard>        
    );    
}

const GroupcategoryLazyEditPageContent = Lazy(GroupcategoryEditPageContentBase)(QueryAction, QueryActionValidator)

export const GroupcategoryEditPage = () => {
    const params = useParams()
    return (<GroupcategoryLazyEditPageContent {...params} />)

}
