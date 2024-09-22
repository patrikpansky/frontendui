import { StatementofworkMediumCard } from './StatementofworkMediumCard';
import { StatementofworkLargeCardLayout } from './StatementofworkLargeCardLayout';
import { StatementofworkVectorLinksCard } from './StatementofworkVectorLinksCard';

/**/
//  Statementofwork: StatementOfWork
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby statementofwork

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby statementofwork

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject statementofwork

//  Project: Project
// import { Project } from '../Project/ProjectMediumCard';
// project statementofwork

//  Event: Event
// import { Event } from '../Event/EventMediumCard';
// event statementofwork


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ statementofwork?.createdby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ statementofwork?.changedby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ statementofwork?.rbacobject }/>
import { ProjectMediumCard as MediumCard9 } from '../Project/ProjectMediumCard';
// <MediumCard9 project={ statementofwork?.project }/>
import { EventMediumCard as MediumCard10 } from '../Event/EventMediumCard';
// <MediumCard10 event={ statementofwork?.event }/>

/**
 * Entity representing a SOW
 */
export const StatementofworkLargeCard = ({ statementofwork, children}) => {
    // console.log("StatementofworkLargeCard", statementofwork)
    return (
        <StatementofworkLargeCardLayout statementofwork={ statementofwork } grandchildren={children}>
            <StatementofworkMediumCard statementofwork={ statementofwork }/>
            <StatementofworkVectorLinksCard  statementofwork={ statementofwork } />
            { 
                statementofwork?.createdby?<MediumCard5 user={ statementofwork?.createdby } label={"Createdby"} />:null
            }
            { 
                statementofwork?.changedby?<MediumCard6 user={ statementofwork?.changedby } label={"Changedby"} />:null
            }
            { 
                statementofwork?.rbacobject?<MediumCard7 rbacobject={ statementofwork?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                statementofwork?.project?<MediumCard9 project={ statementofwork?.project } label={"Project"} />:null
            }
            { 
                statementofwork?.event?<MediumCard10 event={ statementofwork?.event } label={"Event"} />:null
            }
        </StatementofworkLargeCardLayout>
    )
}

