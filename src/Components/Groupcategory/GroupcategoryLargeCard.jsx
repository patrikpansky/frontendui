import { GroupcategoryMediumCard } from './GroupcategoryMediumCard';
import { GroupcategoryLargeCardLayout } from './GroupcategoryLargeCardLayout';
import { GroupcategoryVectorLinksCard } from './GroupcategoryVectorLinksCard';

/**/
//  Groupcategory: GroupCategory
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby groupcategory

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby groupcategory

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject groupcategory


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ groupcategory?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ groupcategory?.changedby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ groupcategory?.rbacobject }/>

/**
 * Entity representing a group category (like Academic structures)
 */
export const GroupcategoryLargeCard = ({ groupcategory, children}) => {
    // console.log("GroupcategoryLargeCard", groupcategory)
    return (
        <GroupcategoryLargeCardLayout groupcategory={ groupcategory } grandchildren={children}>
            <GroupcategoryMediumCard groupcategory={ groupcategory }/>
            <GroupcategoryVectorLinksCard  groupcategory={ groupcategory } />
            { 
                groupcategory?.createdby?<MediumCard1 user={ groupcategory?.createdby } label={"Createdby"} />:null
            }
            { 
                groupcategory?.changedby?<MediumCard4 user={ groupcategory?.changedby } label={"Changedby"} />:null
            }
            { 
                groupcategory?.rbacobject?<MediumCard7 rbacobject={ groupcategory?.rbacobject } label={"Rbacobject"} />:null
            }
        </GroupcategoryLargeCardLayout>
    )
}

