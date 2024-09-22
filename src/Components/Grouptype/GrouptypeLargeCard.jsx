import { GrouptypeMediumCard } from './GrouptypeMediumCard';
import { GrouptypeLargeCardLayout } from './GrouptypeLargeCardLayout';
import { GrouptypeVectorLinksCard } from './GrouptypeVectorLinksCard';

/**/
//  Grouptype: GroupType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby grouptype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby grouptype

//  Category: Groupcategory
// import { Groupcategory } from '../Groupcategory/GroupcategoryMediumCard';
// category grouptype

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject grouptype


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ grouptype?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ grouptype?.changedby }/>
import { GroupcategoryMediumCard as MediumCard7 } from '../Groupcategory/GroupcategoryMediumCard';
// <MediumCard7 groupcategory={ grouptype?.category }/>
import { RbacobjectMediumCard as MediumCard8 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard8 rbacobject={ grouptype?.rbacobject }/>

/**
 * Entity representing a group type (like Faculty)
 */
export const GrouptypeLargeCard = ({ grouptype, children}) => {
    // console.log("GrouptypeLargeCard", grouptype)
    return (
        <GrouptypeLargeCardLayout grouptype={ grouptype } grandchildren={children}>
            <GrouptypeMediumCard grouptype={ grouptype }/>
            <GrouptypeVectorLinksCard  grouptype={ grouptype } />
            { 
                grouptype?.createdby?<MediumCard1 user={ grouptype?.createdby } label={"Createdby"} />:null
            }
            { 
                grouptype?.changedby?<MediumCard4 user={ grouptype?.changedby } label={"Changedby"} />:null
            }
            { 
                grouptype?.category?<MediumCard7 groupcategory={ grouptype?.category } label={"Category"} />:null
            }
            { 
                grouptype?.rbacobject?<MediumCard8 rbacobject={ grouptype?.rbacobject } label={"Rbacobject"} />:null
            }
        </GrouptypeLargeCardLayout>
    )
}

