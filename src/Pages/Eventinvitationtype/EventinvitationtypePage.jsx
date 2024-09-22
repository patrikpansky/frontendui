import { useParams } from "react-router-dom"

import { InvitationtypeLazy as Lazy } from "../../Components/Invitationtype/InvitationtypeLazy";
import { InvitationtypeLargeCard as LargeCard } from "../../Components/Invitationtype/InvitationtypeLargeCard";
import { InvitationtypeCardCapsule as CardCapsule } from "../../Components/Invitationtype/InvitationtypeCardCapsule";

import { 
    EventinvitationtypePageQueryAction as QueryAction,
    EventinvitationtypePageQueryActionValidator as QueryActionValidator
} from "./EventinvitationtypePageQueryAction";


export const EventinvitationtypePageContentBase = ({ eventinvitationtype, children}) => {
    return (
        <LargeCard eventinvitationtype={ eventinvitationtype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const EventinvitationtypePageContent = ({ eventinvitationtype }) => {

        return (
            <EventinvitationtypePageContentBase eventinvitationtype={ eventinvitationtype }>
                {/* other data */}
            </EventinvitationtypePageContentBase>        
        );    
}

const EventinvitationtypeLazyPageContent = Lazy(EventinvitationtypePageContent)(QueryAction, QueryActionValidator)

export const EventinvitationtypePage = () => {
    const params = useParams()
    return (<EventinvitationtypeLazyPageContent {...params} />)

}
