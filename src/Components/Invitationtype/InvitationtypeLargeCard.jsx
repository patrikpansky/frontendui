import { InvitationtypeMediumCard } from './InvitationtypeMediumCard';
import { InvitationtypeLargeCardLayout } from './InvitationtypeLargeCardLayout';
import { InvitationtypeVectorLinksCard } from './InvitationtypeVectorLinksCard';

/**/
//  Invitationtype: InvitationType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby invitationtype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby invitationtype


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ invitationtype?.createdby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ invitationtype?.changedby }/>

/**
 * Represents if an user has been invited to the event ot whatever
 */
export const InvitationtypeLargeCard = ({ invitationtype, children}) => {
    // console.log("InvitationtypeLargeCard", invitationtype)
    return (
        <InvitationtypeLargeCardLayout invitationtype={ invitationtype } grandchildren={children}>
            <InvitationtypeMediumCard invitationtype={ invitationtype }/>
            <InvitationtypeVectorLinksCard  invitationtype={ invitationtype } />
            { 
                invitationtype?.createdby?<MediumCard5 user={ invitationtype?.createdby } label={"Createdby"} />:null
            }
            { 
                invitationtype?.changedby?<MediumCard6 user={ invitationtype?.changedby } label={"Changedby"} />:null
            }
        </InvitationtypeLargeCardLayout>
    )
}

