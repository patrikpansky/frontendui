import { RoleMediumCard } from './RoleMediumCard';
import { RoleLargeCardLayout } from './RoleLargeCardLayout';
import { RoleVectorLinksCard } from './RoleVectorLinksCard';

/**/
//  Role: Role
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby role

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby role

//  Roletype: Roletype
// import { Roletype } from '../Roletype/RoletypeMediumCard';
// roletype role

//  User: User
// import { User } from '../User/UserMediumCard';
// user role

//  Group: Group
// import { Group } from '../Group/GroupMediumCard';
// group role

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject role


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ role?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ role?.changedby }/>
import { RoletypeMediumCard as MediumCard8 } from '../Roletype/RoletypeMediumCard';
// <MediumCard8 roletype={ role?.roletype }/>
import { UserMediumCard as MediumCard9 } from '../User/UserMediumCard';
// <MediumCard9 user={ role?.user }/>
import { GroupMediumCard as MediumCard10 } from '../Group/GroupMediumCard';
// <MediumCard10 group={ role?.group }/>
import { RbacobjectMediumCard as MediumCard11 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard11 rbacobject={ role?.rbacobject }/>

/**
 * Entity representing a role of a user in a group (like user A in group B is Dean)
 */
export const RoleLargeCard = ({ role, children}) => {
    // console.log("RoleLargeCard", role)
    return (
        <RoleLargeCardLayout role={ role } grandchildren={children}>
            <RoleMediumCard role={ role }/>
            <RoleVectorLinksCard  role={ role } />
            { 
                role?.createdby?<MediumCard1 user={ role?.createdby } label={"Createdby"} />:null
            }
            { 
                role?.changedby?<MediumCard4 user={ role?.changedby } label={"Changedby"} />:null
            }
            { 
                role?.roletype?<MediumCard8 roletype={ role?.roletype } label={"Roletype"} />:null
            }
            { 
                role?.user?<MediumCard9 user={ role?.user } label={"User"} />:null
            }
            { 
                role?.group?<MediumCard10 group={ role?.group } label={"Group"} />:null
            }
            { 
                role?.rbacobject?<MediumCard11 rbacobject={ role?.rbacobject } label={"Rbacobject"} />:null
            }
        </RoleLargeCardLayout>
    )
}

