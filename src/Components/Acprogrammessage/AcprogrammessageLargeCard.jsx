import { AcprogrammessageMediumCard } from './AcprogrammessageMediumCard';
import { AcprogrammessageLargeCardLayout } from './AcprogrammessageLargeCardLayout';
import { AcprogrammessageVectorLinksCard } from './AcprogrammessageVectorLinksCard';

/**/
//  Acprogrammessage: AcProgramMessage
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acprogrammessage

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acprogrammessage

//  Student: User
// import { User } from '../User/UserMediumCard';
// student acprogrammessage

//  Program: Acprogram
// import { Acprogram } from '../Acprogram/AcprogramMediumCard';
// program acprogrammessage


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ acprogrammessage?.createdby }/>
import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ acprogrammessage?.changedby }/>
import { UserMediumCard as MediumCard8 } from '../User/UserMediumCard';
// <MediumCard8 user={ acprogrammessage?.student }/>
import { AcprogramMediumCard as MediumCard9 } from '../Acprogram/AcprogramMediumCard';
// <MediumCard9 acprogram={ acprogrammessage?.program }/>

/**
 * Entity representing acredited study programs
 */
export const AcprogrammessageLargeCard = ({ acprogrammessage, children}) => {
    // console.log("AcprogrammessageLargeCard", acprogrammessage)
    return (
        <AcprogrammessageLargeCardLayout acprogrammessage={ acprogrammessage } grandchildren={children}>
            <AcprogrammessageMediumCard acprogrammessage={ acprogrammessage }/>
            <AcprogrammessageVectorLinksCard  acprogrammessage={ acprogrammessage } />
            { 
                acprogrammessage?.createdby?<MediumCard1 user={ acprogrammessage?.createdby } label={"Createdby"} />:null
            }
            { 
                acprogrammessage?.changedby?<MediumCard2 user={ acprogrammessage?.changedby } label={"Changedby"} />:null
            }
            { 
                acprogrammessage?.student?<MediumCard8 user={ acprogrammessage?.student } label={"Student"} />:null
            }
            { 
                acprogrammessage?.program?<MediumCard9 acprogram={ acprogrammessage?.program } label={"Program"} />:null
            }
        </AcprogrammessageLargeCardLayout>
    )
}

