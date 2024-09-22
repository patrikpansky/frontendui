import { EventtypeMediumCard } from './EventtypeMediumCard';
import { EventtypeLargeCardLayout } from './EventtypeLargeCardLayout';
import { EventtypeVectorLinksCard } from './EventtypeVectorLinksCard';

/**/
//  Eventtype: EventType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby eventtype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby eventtype


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ eventtype?.createdby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ eventtype?.changedby }/>

/**
 * Represents an event type
 */
export const EventtypeLargeCard = ({ eventtype, children}) => {
    // console.log("EventtypeLargeCard", eventtype)
    return (
        <EventtypeLargeCardLayout eventtype={ eventtype } grandchildren={children}>
            <EventtypeMediumCard eventtype={ eventtype }/>
            <EventtypeVectorLinksCard  eventtype={ eventtype } />
            { 
                eventtype?.createdby?<MediumCard5 user={ eventtype?.createdby } label={"Createdby"} />:null
            }
            { 
                eventtype?.changedby?<MediumCard6 user={ eventtype?.changedby } label={"Changedby"} />:null
            }
        </EventtypeLargeCardLayout>
    )
}

