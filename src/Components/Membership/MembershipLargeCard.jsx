import { MembershipMediumCard } from './MembershipMediumCard';
import { MembershipLargeCardLayout } from './MembershipLargeCardLayout';
import { MembershipVectorLinksCard } from './MembershipVectorLinksCard';

/**/
//  Membership: Membership
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby membership

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby membership

//  User: User
// import { User } from '../User/UserMediumCard';
// user membership

//  Group: Group
// import { Group } from '../Group/GroupMediumCard';
// group membership

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject membership


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ membership?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ membership?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ membership?.user }/>
import { GroupMediumCard as MediumCard6 } from '../Group/GroupMediumCard';
// <MediumCard6 group={ membership?.group }/>
import { RbacobjectMediumCard as MediumCard10 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard10 rbacobject={ membership?.rbacobject }/>

/**
 * Entity representing a relation between an user and a group
 */
export const MembershipLargeCard = ({ membership, children}) => {
    // console.log("MembershipLargeCard", membership)
    return (
        <MembershipLargeCardLayout membership={ membership } grandchildren={children}>
            <MembershipMediumCard membership={ membership }/>
            <MembershipVectorLinksCard  membership={ membership } />
            { 
                membership?.createdby?<MediumCard1 user={ membership?.createdby } label={"Createdby"} />:null
            }
            { 
                membership?.changedby?<MediumCard4 user={ membership?.changedby } label={"Changedby"} />:null
            }
            { 
                membership?.user?<MediumCard5 user={ membership?.user } label={"User"} />:null
            }
            { 
                membership?.group?<MediumCard6 group={ membership?.group } label={"Group"} />:null
            }
            { 
                membership?.rbacobject?<MediumCard10 rbacobject={ membership?.rbacobject } label={"Rbacobject"} />:null
            }
        </MembershipLargeCardLayout>
    )
}

