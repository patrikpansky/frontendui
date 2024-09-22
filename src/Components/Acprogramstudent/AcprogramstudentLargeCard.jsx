import { AcprogramstudentMediumCard } from './AcprogramstudentMediumCard';
import { AcprogramstudentLargeCardLayout } from './AcprogramstudentLargeCardLayout';
import { AcprogramstudentVectorLinksCard } from './AcprogramstudentVectorLinksCard';

/**/
//  Acprogramstudent: AcProgramStudent
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acprogramstudent

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acprogramstudent

//  Student: User
// import { User } from '../User/UserMediumCard';
// student acprogramstudent

//  State: Acprogramstudentstate
// import { Acprogramstudentstate } from '../Acprogramstudentstate/AcprogramstudentstateMediumCard';
// state acprogramstudent

//  Program: Acprogram
// import { Acprogram } from '../Acprogram/AcprogramMediumCard';
// program acprogramstudent


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ acprogramstudent?.createdby }/>
import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ acprogramstudent?.changedby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ acprogramstudent?.student }/>
import { AcprogramstudentstateMediumCard as MediumCard8 } from '../Acprogramstudentstate/AcprogramstudentstateMediumCard';
// <MediumCard8 acprogramstudentstate={ acprogramstudent?.state }/>
import { AcprogramMediumCard as MediumCard9 } from '../Acprogram/AcprogramMediumCard';
// <MediumCard9 acprogram={ acprogramstudent?.program }/>

/**
 * Entity which links program and student
 */
export const AcprogramstudentLargeCard = ({ acprogramstudent, children}) => {
    // console.log("AcprogramstudentLargeCard", acprogramstudent)
    return (
        <AcprogramstudentLargeCardLayout acprogramstudent={ acprogramstudent } grandchildren={children}>
            <AcprogramstudentMediumCard acprogramstudent={ acprogramstudent }/>
            <AcprogramstudentVectorLinksCard  acprogramstudent={ acprogramstudent } />
            { 
                acprogramstudent?.createdby?<MediumCard1 user={ acprogramstudent?.createdby } label={"Createdby"} />:null
            }
            { 
                acprogramstudent?.changedby?<MediumCard2 user={ acprogramstudent?.changedby } label={"Changedby"} />:null
            }
            { 
                acprogramstudent?.student?<MediumCard6 user={ acprogramstudent?.student } label={"Student"} />:null
            }
            { 
                acprogramstudent?.state?<MediumCard8 acprogramstudentstate={ acprogramstudent?.state } label={"State"} />:null
            }
            { 
                acprogramstudent?.program?<MediumCard9 acprogram={ acprogramstudent?.program } label={"Program"} />:null
            }
        </AcprogramstudentLargeCardLayout>
    )
}

