import { useParams } from "react-router-dom"

import { GrouptypeLazy as Lazy } from "../../Components/Grouptype/GrouptypeLazy";
import { GrouptypeLargeCard as LargeCard } from "../../Components/Grouptype/GrouptypeLargeCard";
import { GrouptypeCardCapsule as CardCapsule } from "../../Components/Grouptype/GrouptypeCardCapsule";

import { 
    GrouptypePageQueryAction as QueryAction,
    GrouptypePageQueryActionValidator as QueryActionValidator
} from "./GrouptypePageQueryAction";


export const GrouptypePageContentBase = ({ grouptype, children}) => {
    return (
        <LargeCard grouptype={ grouptype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const GrouptypePageContent = ({ grouptype }) => {

        return (
            <GrouptypePageContentBase grouptype={ grouptype }>
                {/* other data */}
            </GrouptypePageContentBase>        
        );    
}

const GrouptypeLazyPageContent = Lazy(GrouptypePageContent)(QueryAction, QueryActionValidator)

export const GrouptypePage = () => {
    const params = useParams()
    return (<GrouptypeLazyPageContent {...params} />)

}
