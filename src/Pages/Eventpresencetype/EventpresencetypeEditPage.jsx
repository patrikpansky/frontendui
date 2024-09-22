import { useParams } from "react-router-dom"

import { PresencetypeLazy as Lazy } from "../../Components/Presencetype/PresencetypeLazy";
import { PresencetypeLargeCard as LargeCard } from "../../Components/Presencetype/PresencetypeLargeCard";
import { PresencetypeCardCapsule as CardCapsule } from "../../Components/Presencetype/PresencetypeCardCapsule";
import { PresencetypeEditCard as EditCard } from "../../Components/Presencetype/PresencetypeEditCard";

import { 
    EventpresencetypePageQueryAction as QueryAction,
    EventpresencetypePageQueryActionValidator as QueryActionValidator
} from "./EventpresencetypePageQueryAction";


export const EventpresencetypeEditPageContentBase = ({ eventpresencetype, children}) => {
    return (
        <LargeCard eventpresencetype={ eventpresencetype }>
            {/* other data */}
            <EditCard eventpresencetype={ eventpresencetype }/>
        </LargeCard>        
    );    
}

const EventpresencetypeLazyEditPageContent = Lazy(EventpresencetypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const EventpresencetypeEditPage = () => {
    const params = useParams()
    return (<EventpresencetypeLazyEditPageContent {...params} />)

}
