import { useParams } from "react-router-dom"

import { GrouptypeLazy as Lazy } from "../../Components/Grouptype/GrouptypeLazy";
import { GrouptypeLargeCard as LargeCard } from "../../Components/Grouptype/GrouptypeLargeCard";
import { GrouptypeCardCapsule as CardCapsule } from "../../Components/Grouptype/GrouptypeCardCapsule";
import { GrouptypeEditCard as EditCard } from "../../Components/Grouptype/GrouptypeEditCard";

import { 
    GrouptypePageQueryAction as QueryAction,
    GrouptypePageQueryActionValidator as QueryActionValidator
} from "./GrouptypePageQueryAction";


export const GrouptypeEditPageContentBase = ({ grouptype, children}) => {
    return (
        <LargeCard grouptype={ grouptype }>
            {/* other data */}
            <EditCard grouptype={ grouptype }/>
        </LargeCard>        
    );    
}

const GrouptypeLazyEditPageContent = Lazy(GrouptypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const GrouptypeEditPage = () => {
    const params = useParams()
    return (<GrouptypeLazyEditPageContent {...params} />)

}
