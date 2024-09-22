import { useParams } from "react-router-dom"

import { GroupcategoryLazy as Lazy } from "../../Components/Groupcategory/GroupcategoryLazy";
import { GroupcategoryLargeCard as LargeCard } from "../../Components/Groupcategory/GroupcategoryLargeCard";
import { GroupcategoryCardCapsule as CardCapsule } from "../../Components/Groupcategory/GroupcategoryCardCapsule";

import { 
    GroupcategoryPageQueryAction as QueryAction,
    GroupcategoryPageQueryActionValidator as QueryActionValidator
} from "./GroupcategoryPageQueryAction";

import { GrouptypesTable as TypesTable8 } from '../../Components/Grouptype/GrouptypesTable';

export const GroupcategoryPageContentBase = ({ groupcategory, children}) => {
    return (
        <LargeCard groupcategory={ groupcategory }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const GroupcategoryPageContent = ({ groupcategory }) => {

        return (
            <GroupcategoryPageContentBase groupcategory={ groupcategory }>
                {/* other data */}
                { groupcategory?.types?
                    <CardCapsule groupcategory={ groupcategory } label={ "types" }>
                        <TypesTable8 grouptypes={ groupcategory?.types || []}/>
                    </CardCapsule>:null
                }
            </GroupcategoryPageContentBase>        
        );    
}

const GroupcategoryLazyPageContent = Lazy(GroupcategoryPageContent)(QueryAction, QueryActionValidator)

export const GroupcategoryPage = () => {
    const params = useParams()
    return (<GroupcategoryLazyPageContent {...params} />)

}
