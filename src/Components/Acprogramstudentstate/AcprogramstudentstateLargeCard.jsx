import { AcprogramstudentstateMediumCard } from './AcprogramstudentstateMediumCard';
import { AcprogramstudentstateLargeCardLayout } from './AcprogramstudentstateLargeCardLayout';
import { AcprogramstudentstateVectorLinksCard } from './AcprogramstudentstateVectorLinksCard';

/**/
//  Acprogramstudentstate: AcProgramStudentState
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acprogramstudentstate

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acprogramstudentstate


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acprogramstudentstate?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acprogramstudentstate?.changedby }/>

/**
 * Entity which links program and student
 */
export const AcprogramstudentstateLargeCard = ({ acprogramstudentstate, children}) => {
    // console.log("AcprogramstudentstateLargeCard", acprogramstudentstate)
    return (
        <AcprogramstudentstateLargeCardLayout acprogramstudentstate={ acprogramstudentstate } grandchildren={children}>
            <AcprogramstudentstateMediumCard acprogramstudentstate={ acprogramstudentstate }/>
            <AcprogramstudentstateVectorLinksCard  acprogramstudentstate={ acprogramstudentstate } />
            { 
                acprogramstudentstate?.createdby?<MediumCard3 user={ acprogramstudentstate?.createdby } label={"Createdby"} />:null
            }
            { 
                acprogramstudentstate?.changedby?<MediumCard4 user={ acprogramstudentstate?.changedby } label={"Changedby"} />:null
            }
        </AcprogramstudentstateLargeCardLayout>
    )
}

