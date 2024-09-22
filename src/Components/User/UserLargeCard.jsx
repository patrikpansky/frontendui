import { UserMediumCard } from './UserMediumCard';
import { UserLargeCardLayout } from './UserLargeCardLayout';
import { UserVectorLinksCard } from './UserVectorLinksCard';

/**/
//  User: User
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby user

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby user

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject user


import { UserMediumCard as MediumCard10 } from '../User/UserMediumCard';
// <MediumCard10 user={ user?.createdby }/>
import { UserMediumCard as MediumCard13 } from '../User/UserMediumCard';
// <MediumCard13 user={ user?.changedby }/>
import { RbacobjectMediumCard as MediumCard15 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard15 rbacobject={ user?.rbacobject }/>

/**
 * Entity representing a user
 */
export const UserLargeCard = ({ user, children}) => {
    // console.log("UserLargeCard", user)
    return (
        <UserLargeCardLayout user={ user } grandchildren={children}>
            <UserMediumCard user={ user }/>
            <UserVectorLinksCard  user={ user } />
            { 
                user?.createdby?<MediumCard10 user={ user?.createdby } label={"Createdby"} />:null
            }
            { 
                user?.changedby?<MediumCard13 user={ user?.changedby } label={"Changedby"} />:null
            }
            { 
                user?.rbacobject?<MediumCard15 rbacobject={ user?.rbacobject } label={"Rbacobject"} />:null
            }
        </UserLargeCardLayout>
    )
}

