import { MilestoneMediumCard } from './MilestoneMediumCard';
import { MilestoneLargeCardLayout } from './MilestoneLargeCardLayout';
import { MilestoneVectorLinksCard } from './MilestoneVectorLinksCard';

/**/
//  Milestone: Milestone
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby milestone

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby milestone

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject milestone

//  Project: Project
// import { Project } from '../Project/ProjectMediumCard';
// project milestone


import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ milestone?.changedby }/>
import { UserMediumCard as MediumCard7 } from '../User/UserMediumCard';
// <MediumCard7 user={ milestone?.createdby }/>
import { RbacobjectMediumCard as MediumCard8 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard8 rbacobject={ milestone?.rbacobject }/>
import { ProjectMediumCard as MediumCard10 } from '../Project/ProjectMediumCard';
// <MediumCard10 project={ milestone?.project }/>

/**
 * Entity representing a milestone
 */
export const MilestoneLargeCard = ({ milestone, children}) => {
    // console.log("MilestoneLargeCard", milestone)
    return (
        <MilestoneLargeCardLayout milestone={ milestone } grandchildren={children}>
            <MilestoneMediumCard milestone={ milestone }/>
            <MilestoneVectorLinksCard  milestone={ milestone } />
            { 
                milestone?.changedby?<MediumCard4 user={ milestone?.changedby } label={"Changedby"} />:null
            }
            { 
                milestone?.createdby?<MediumCard7 user={ milestone?.createdby } label={"Createdby"} />:null
            }
            { 
                milestone?.rbacobject?<MediumCard8 rbacobject={ milestone?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                milestone?.project?<MediumCard10 project={ milestone?.project } label={"Project"} />:null
            }
        </MilestoneLargeCardLayout>
    )
}

