import { RolecategoryMediumCard } from './RolecategoryMediumCard';
import { RolecategoryLargeCardLayout } from './RolecategoryLargeCardLayout';
import { RolecategoryVectorLinksCard } from './RolecategoryVectorLinksCard';

/**/
//  Rolecategory: RoleCategory
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby rolecategory

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby rolecategory

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject rolecategory


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ rolecategory?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ rolecategory?.changedby }/>
import { RbacobjectMediumCard as MediumCard8 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard8 rbacobject={ rolecategory?.rbacobject }/>

/**
 * Entity representing a role type (like Dean)
 */
export const RolecategoryLargeCard = ({ rolecategory, children}) => {
    // console.log("RolecategoryLargeCard", rolecategory)
    return (
        <RolecategoryLargeCardLayout rolecategory={ rolecategory } grandchildren={children}>
            <RolecategoryMediumCard rolecategory={ rolecategory }/>
            <RolecategoryVectorLinksCard  rolecategory={ rolecategory } />
            { 
                rolecategory?.createdby?<MediumCard1 user={ rolecategory?.createdby } label={"Createdby"} />:null
            }
            { 
                rolecategory?.changedby?<MediumCard4 user={ rolecategory?.changedby } label={"Changedby"} />:null
            }
            { 
                rolecategory?.rbacobject?<MediumCard8 rbacobject={ rolecategory?.rbacobject } label={"Rbacobject"} />:null
            }
        </RolecategoryLargeCardLayout>
    )
}

