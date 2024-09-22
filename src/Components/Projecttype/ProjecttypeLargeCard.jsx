import { ProjecttypeMediumCard } from './ProjecttypeMediumCard';
import { ProjecttypeLargeCardLayout } from './ProjecttypeLargeCardLayout';
import { ProjecttypeVectorLinksCard } from './ProjecttypeVectorLinksCard';

/**/
//  Projecttype: ProjectType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby projecttype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby projecttype

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject projecttype

//  Category: Projectcategory
// import { Projectcategory } from '../Projectcategory/ProjectcategoryMediumCard';
// category projecttype


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ projecttype?.createdby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ projecttype?.changedby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ projecttype?.rbacobject }/>
import { ProjectcategoryMediumCard as MediumCard10 } from '../Projectcategory/ProjectcategoryMediumCard';
// <MediumCard10 projectcategory={ projecttype?.category }/>

/**
 * Entity representing a project types
 */
export const ProjecttypeLargeCard = ({ projecttype, children}) => {
    // console.log("ProjecttypeLargeCard", projecttype)
    return (
        <ProjecttypeLargeCardLayout projecttype={ projecttype } grandchildren={children}>
            <ProjecttypeMediumCard projecttype={ projecttype }/>
            <ProjecttypeVectorLinksCard  projecttype={ projecttype } />
            { 
                projecttype?.createdby?<MediumCard5 user={ projecttype?.createdby } label={"Createdby"} />:null
            }
            { 
                projecttype?.changedby?<MediumCard6 user={ projecttype?.changedby } label={"Changedby"} />:null
            }
            { 
                projecttype?.rbacobject?<MediumCard7 rbacobject={ projecttype?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                projecttype?.category?<MediumCard10 projectcategory={ projecttype?.category } label={"Category"} />:null
            }
        </ProjecttypeLargeCardLayout>
    )
}

