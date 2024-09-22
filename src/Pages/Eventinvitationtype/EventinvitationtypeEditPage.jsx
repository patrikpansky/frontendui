import { useParams } from "react-router-dom"

import { InvitationtypeLazy as Lazy } from "../../Components/Invitationtype/InvitationtypeLazy";
import { InvitationtypeLargeCard as LargeCard } from "../../Components/Invitationtype/InvitationtypeLargeCard";
import { InvitationtypeCardCapsule as CardCapsule } from "../../Components/Invitationtype/InvitationtypeCardCapsule";
import { InvitationtypeEditCard as EditCard } from "../../Components/Invitationtype/InvitationtypeEditCard";

import { 
    EventinvitationtypePageQueryAction as QueryAction,
    EventinvitationtypePageQueryActionValidator as QueryActionValidator
} from "./EventinvitationtypePageQueryAction";


export const EventinvitationtypeEditPageContentBase = ({ eventinvitationtype, children}) => {
    return (
        <LargeCard eventinvitationtype={ eventinvitationtype }>
            {/* other data */}
            <EditCard eventinvitationtype={ eventinvitationtype }/>
        </LargeCard>        
    );    
}

const EventinvitationtypeLazyEditPageContent = Lazy(EventinvitationtypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const EventinvitationtypeEditPage = () => {
    const params = useParams()
    return (<EventinvitationtypeLazyEditPageContent {...params} />)

}
