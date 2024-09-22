import { FinanceMediumCard } from './FinanceMediumCard';
import { FinanceLargeCardLayout } from './FinanceLargeCardLayout';
import { FinanceVectorLinksCard } from './FinanceVectorLinksCard';

/**/
//  Finance: Finance
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby finance

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby finance

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject finance

//  Project: Project
// import { Project } from '../Project/ProjectMediumCard';
// project finance


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ finance?.changedby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ finance?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ finance?.rbacobject }/>
import { ProjectMediumCard as MediumCard9 } from '../Project/ProjectMediumCard';
// <MediumCard9 project={ finance?.project }/>

/**
 * Entity representing a finance
 */
export const FinanceLargeCard = ({ finance, children}) => {
    // console.log("FinanceLargeCard", finance)
    return (
        <FinanceLargeCardLayout finance={ finance } grandchildren={children}>
            <FinanceMediumCard finance={ finance }/>
            <FinanceVectorLinksCard  finance={ finance } />
            { 
                finance?.changedby?<MediumCard3 user={ finance?.changedby } label={"Changedby"} />:null
            }
            { 
                finance?.createdby?<MediumCard6 user={ finance?.createdby } label={"Createdby"} />:null
            }
            { 
                finance?.rbacobject?<MediumCard7 rbacobject={ finance?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                finance?.project?<MediumCard9 project={ finance?.project } label={"Project"} />:null
            }
        </FinanceLargeCardLayout>
    )
}

