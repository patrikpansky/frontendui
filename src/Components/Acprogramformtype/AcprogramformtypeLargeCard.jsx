import { AcprogramformtypeMediumCard } from './AcprogramformtypeMediumCard';
import { AcprogramformtypeLargeCardLayout } from './AcprogramformtypeLargeCardLayout';
import { AcprogramformtypeVectorLinksCard } from './AcprogramformtypeVectorLinksCard';

/**/
//  Acprogramformtype: AcProgramFormType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acprogramformtype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acprogramformtype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acprogramformtype?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acprogramformtype?.changedby }/>

/**
 * Program form type (Present, distant, ...)
 */
export const AcprogramformtypeLargeCard = ({ acprogramformtype, children}) => {
    // console.log("AcprogramformtypeLargeCard", acprogramformtype)
    return (
        <AcprogramformtypeLargeCardLayout acprogramformtype={ acprogramformtype } grandchildren={children}>
            <AcprogramformtypeMediumCard acprogramformtype={ acprogramformtype }/>
            <AcprogramformtypeVectorLinksCard  acprogramformtype={ acprogramformtype } />
            { 
                acprogramformtype?.createdby?<MediumCard3 user={ acprogramformtype?.createdby } label={"Createdby"} />:null
            }
            { 
                acprogramformtype?.changedby?<MediumCard4 user={ acprogramformtype?.changedby } label={"Changedby"} />:null
            }
        </AcprogramformtypeLargeCardLayout>
    )
}

