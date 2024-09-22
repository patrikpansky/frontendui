import { AcprogramlanguagetypeMediumCard } from './AcprogramlanguagetypeMediumCard';
import { AcprogramlanguagetypeLargeCardLayout } from './AcprogramlanguagetypeLargeCardLayout';
import { AcprogramlanguagetypeVectorLinksCard } from './AcprogramlanguagetypeVectorLinksCard';

/**/
//  Acprogramlanguagetype: AcProgramLanguageType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acprogramlanguagetype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acprogramlanguagetype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acprogramlanguagetype?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acprogramlanguagetype?.changedby }/>

/**
 * Study program language
 */
export const AcprogramlanguagetypeLargeCard = ({ acprogramlanguagetype, children}) => {
    // console.log("AcprogramlanguagetypeLargeCard", acprogramlanguagetype)
    return (
        <AcprogramlanguagetypeLargeCardLayout acprogramlanguagetype={ acprogramlanguagetype } grandchildren={children}>
            <AcprogramlanguagetypeMediumCard acprogramlanguagetype={ acprogramlanguagetype }/>
            <AcprogramlanguagetypeVectorLinksCard  acprogramlanguagetype={ acprogramlanguagetype } />
            { 
                acprogramlanguagetype?.createdby?<MediumCard3 user={ acprogramlanguagetype?.createdby } label={"Createdby"} />:null
            }
            { 
                acprogramlanguagetype?.changedby?<MediumCard4 user={ acprogramlanguagetype?.changedby } label={"Changedby"} />:null
            }
        </AcprogramlanguagetypeLargeCardLayout>
    )
}

