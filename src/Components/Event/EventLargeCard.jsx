import { EventMediumCard } from './EventMediumCard';
import { EventLargeCardLayout } from './EventLargeCardLayout';
import { EventVectorLinksCard } from './EventVectorLinksCard';

/**/
//  Event: Event
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby event

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby event

//  Rbac: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbac event

//  Eventtype: Eventtype
// import { Eventtype } from '../Eventtype/EventtypeMediumCard';
// eventtype event

//  Masterevent: Event
// import { Event } from '../Event/EventMediumCard';
// masterevent event


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ event?.createdby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ event?.changedby }/>
import { RbacobjectMediumCard as MediumCard8 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard8 rbacobject={ event?.rbac }/>
import { EventtypeMediumCard as MediumCard17 } from '../Eventtype/EventtypeMediumCard';
// <MediumCard17 eventtype={ event?.eventtype }/>
import { EventMediumCard as MediumCard18 } from '../Event/EventMediumCard';
// <MediumCard18 event={ event?.masterevent }/>

/**
 * Entity representing an event (calendar item)
 */
export const EventLargeCard = ({ event, children}) => {
    // console.log("EventLargeCard", event)
    return (
        <EventLargeCardLayout event={ event } grandchildren={children}>
            <EventMediumCard event={ event }/>
            <EventVectorLinksCard  event={ event } />
            { 
                event?.createdby?<MediumCard5 user={ event?.createdby } label={"Createdby"} />:null
            }
            { 
                event?.changedby?<MediumCard6 user={ event?.changedby } label={"Changedby"} />:null
            }
            { 
                event?.rbac?<MediumCard8 rbacobject={ event?.rbac } label={"Rbac"} />:null
            }
            { 
                event?.eventtype?<MediumCard17 eventtype={ event?.eventtype } label={"Eventtype"} />:null
            }
            { 
                event?.masterevent?<MediumCard18 event={ event?.masterevent } label={"Masterevent"} />:null
            }
        </EventLargeCardLayout>
    )
}

