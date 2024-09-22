import { RoletypeMediumCard } from './RoletypeMediumCard';
import { RoletypeLargeCardLayout } from './RoletypeLargeCardLayout';
import { RoletypeVectorLinksCard } from './RoletypeVectorLinksCard';

/**/
//  Roletype: RoleType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby roletype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby roletype

//  Category: Rolecategory
// import { Rolecategory } from '../Rolecategory/RolecategoryMediumCard';
// category roletype

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject roletype


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ roletype?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ roletype?.changedby }/>
import { RolecategoryMediumCard as MediumCard7 } from '../Rolecategory/RolecategoryMediumCard';
// <MediumCard7 rolecategory={ roletype?.category }/>
import { RbacobjectMediumCard as MediumCard8 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard8 rbacobject={ roletype?.rbacobject }/>

/**
 * Entity representing a role type (like Dean)
 */
export const RoletypeLargeCard = ({ roletype, children}) => {
    // console.log("RoletypeLargeCard", roletype)
    return (
        <RoletypeLargeCardLayout roletype={ roletype } grandchildren={children}>
            <RoletypeMediumCard roletype={ roletype }/>
            <RoletypeVectorLinksCard  roletype={ roletype } />
            { 
                roletype?.createdby?<MediumCard1 user={ roletype?.createdby } label={"Createdby"} />:null
            }
            { 
                roletype?.changedby?<MediumCard4 user={ roletype?.changedby } label={"Changedby"} />:null
            }
            { 
                roletype?.category?<MediumCard7 rolecategory={ roletype?.category } label={"Category"} />:null
            }
            { 
                roletype?.rbacobject?<MediumCard8 rbacobject={ roletype?.rbacobject } label={"Rbacobject"} />:null
            }
        </RoletypeLargeCardLayout>
    )
}

