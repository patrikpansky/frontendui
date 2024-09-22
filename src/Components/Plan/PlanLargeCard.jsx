import { PlanMediumCard } from './PlanMediumCard';
import { PlanLargeCardLayout } from './PlanLargeCardLayout';
import { PlanVectorLinksCard } from './PlanVectorLinksCard';

/**/
//  Plan: Plan
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby plan

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby plan

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject plan

//  Semester: Acsemester
// import { Acsemester } from '../Acsemester/AcsemesterMediumCard';
// semester plan


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ plan?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ plan?.createdby }/>
import { RbacobjectMediumCard as MediumCard6 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard6 rbacobject={ plan?.rbacobject }/>
import { AcsemesterMediumCard as MediumCard8 } from '../Acsemester/AcsemesterMediumCard';
// <MediumCard8 acsemester={ plan?.semester }/>

/**
 * Entity representing a study plan for timetable creation
 */
export const PlanLargeCard = ({ plan, children}) => {
    // console.log("PlanLargeCard", plan)
    return (
        <PlanLargeCardLayout plan={ plan } grandchildren={children}>
            <PlanMediumCard plan={ plan }/>
            <PlanVectorLinksCard  plan={ plan } />
            { 
                plan?.changedby?<MediumCard2 user={ plan?.changedby } label={"Changedby"} />:null
            }
            { 
                plan?.createdby?<MediumCard5 user={ plan?.createdby } label={"Createdby"} />:null
            }
            { 
                plan?.rbacobject?<MediumCard6 rbacobject={ plan?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                plan?.semester?<MediumCard8 acsemester={ plan?.semester } label={"Semester"} />:null
            }
        </PlanLargeCardLayout>
    )
}

