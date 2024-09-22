import { ProjectcategoryMediumCard } from './ProjectcategoryMediumCard';
import { ProjectcategoryLargeCardLayout } from './ProjectcategoryLargeCardLayout';
import { ProjectcategoryVectorLinksCard } from './ProjectcategoryVectorLinksCard';

/**/
//  Projectcategory: ProjectCategory
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby projectcategory

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby projectcategory

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject projectcategory


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ projectcategory?.changedby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ projectcategory?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ projectcategory?.rbacobject }/>

/**
 * Entity representing a project category
 */
export const ProjectcategoryLargeCard = ({ projectcategory, children}) => {
    // console.log("ProjectcategoryLargeCard", projectcategory)
    return (
        <ProjectcategoryLargeCardLayout projectcategory={ projectcategory } grandchildren={children}>
            <ProjectcategoryMediumCard projectcategory={ projectcategory }/>
            <ProjectcategoryVectorLinksCard  projectcategory={ projectcategory } />
            { 
                projectcategory?.changedby?<MediumCard3 user={ projectcategory?.changedby } label={"Changedby"} />:null
            }
            { 
                projectcategory?.createdby?<MediumCard6 user={ projectcategory?.createdby } label={"Createdby"} />:null
            }
            { 
                projectcategory?.rbacobject?<MediumCard7 rbacobject={ projectcategory?.rbacobject } label={"Rbacobject"} />:null
            }
        </ProjectcategoryLargeCardLayout>
    )
}

