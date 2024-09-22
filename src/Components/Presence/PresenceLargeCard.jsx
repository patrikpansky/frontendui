import { PresenceMediumCard } from './PresenceMediumCard';
import { PresenceLargeCardLayout } from './PresenceLargeCardLayout';
import { PresenceVectorLinksCard } from './PresenceVectorLinksCard';

/**/
//  Presence: Presence
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby presence

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby presence

//  Presencetype: Presencetype
// import { Presencetype } from '../Presencetype/PresencetypeMediumCard';
// presencetype presence

//  Invitationtype: Invitationtype
// import { Invitationtype } from '../Invitationtype/InvitationtypeMediumCard';
// invitationtype presence

//  User: User
// import { User } from '../User/UserMediumCard';
// user presence

//  Event: Event
// import { Event } from '../Event/EventMediumCard';
// event presence


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ presence?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ presence?.changedby }/>
import { PresencetypeMediumCard as MediumCard5 } from '../Presencetype/PresencetypeMediumCard';
// <MediumCard5 presencetype={ presence?.presencetype }/>
import { InvitationtypeMediumCard as MediumCard6 } from '../Invitationtype/InvitationtypeMediumCard';
// <MediumCard6 invitationtype={ presence?.invitationtype }/>
import { UserMediumCard as MediumCard7 } from '../User/UserMediumCard';
// <MediumCard7 user={ presence?.user }/>
import { EventMediumCard as MediumCard8 } from '../Event/EventMediumCard';
// <MediumCard8 event={ presence?.event }/>

/**
 * Describes a relation of an user to the event by invitation (like invited) and participation (like absent)
 */
export const PresenceLargeCard = ({ presence, children}) => {
    // console.log("PresenceLargeCard", presence)
    return (
        <PresenceLargeCardLayout presence={ presence } grandchildren={children}>
            <PresenceMediumCard presence={ presence }/>
            <PresenceVectorLinksCard  presence={ presence } />
            { 
                presence?.createdby?<MediumCard3 user={ presence?.createdby } label={"Createdby"} />:null
            }
            { 
                presence?.changedby?<MediumCard4 user={ presence?.changedby } label={"Changedby"} />:null
            }
            { 
                presence?.presencetype?<MediumCard5 presencetype={ presence?.presencetype } label={"Presencetype"} />:null
            }
            { 
                presence?.invitationtype?<MediumCard6 invitationtype={ presence?.invitationtype } label={"Invitationtype"} />:null
            }
            { 
                presence?.user?<MediumCard7 user={ presence?.user } label={"User"} />:null
            }
            { 
                presence?.event?<MediumCard8 event={ presence?.event } label={"Event"} />:null
            }
        </PresenceLargeCardLayout>
    )
}

