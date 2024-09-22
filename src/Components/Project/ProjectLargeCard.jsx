import { ProjectMediumCard } from './ProjectMediumCard';
import { ProjectLargeCardLayout } from './ProjectLargeCardLayout';
import { ProjectVectorLinksCard } from './ProjectVectorLinksCard';

/**/
//  Project: Project
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby project

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby project

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject project

//  Projecttype: Projecttype
// import { Projecttype } from '../Projecttype/ProjecttypeMediumCard';
// projecttype project

//  Group: Group
// import { Group } from '../Group/GroupMediumCard';
// group project

//  Team: Group
// import { Group } from '../Group/GroupMediumCard';
// team project


import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ project?.createdby }/>
import { UserMediumCard as MediumCard7 } from '../User/UserMediumCard';
// <MediumCard7 user={ project?.changedby }/>
import { RbacobjectMediumCard as MediumCard8 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard8 rbacobject={ project?.rbacobject }/>
import { ProjecttypeMediumCard as MediumCard10 } from '../Projecttype/ProjecttypeMediumCard';
// <MediumCard10 projecttype={ project?.projecttype }/>
import { GroupMediumCard as MediumCard13 } from '../Group/GroupMediumCard';
// <MediumCard13 group={ project?.group }/>
import { GroupMediumCard as MediumCard14 } from '../Group/GroupMediumCard';
// <MediumCard14 group={ project?.team }/>

/**
 * Entity representing a project
 */
export const ProjectLargeCard = ({ project, children}) => {
    // console.log("ProjectLargeCard", project)
    return (
        <ProjectLargeCardLayout project={ project } grandchildren={children}>
            <ProjectMediumCard project={ project }/>
            <ProjectVectorLinksCard  project={ project } />
            { 
                project?.createdby?<MediumCard6 user={ project?.createdby } label={"Createdby"} />:null
            }
            { 
                project?.changedby?<MediumCard7 user={ project?.changedby } label={"Changedby"} />:null
            }
            { 
                project?.rbacobject?<MediumCard8 rbacobject={ project?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                project?.projecttype?<MediumCard10 projecttype={ project?.projecttype } label={"Projecttype"} />:null
            }
            { 
                project?.group?<MediumCard13 group={ project?.group } label={"Group"} />:null
            }
            { 
                project?.team?<MediumCard14 group={ project?.team } label={"Team"} />:null
            }
        </ProjectLargeCardLayout>
    )
}

