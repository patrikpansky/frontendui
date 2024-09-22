import { AcprogramtitletypeMediumCard } from './AcprogramtitletypeMediumCard';
import { AcprogramtitletypeLargeCardLayout } from './AcprogramtitletypeLargeCardLayout';
import { AcprogramtitletypeVectorLinksCard } from './AcprogramtitletypeVectorLinksCard';

/**/
//  Acprogramtitletype: AcProgramTitleType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acprogramtitletype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acprogramtitletype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acprogramtitletype?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acprogramtitletype?.changedby }/>

/**
 * Bc., Ing., ...
 */
export const AcprogramtitletypeLargeCard = ({ acprogramtitletype, children}) => {
    // console.log("AcprogramtitletypeLargeCard", acprogramtitletype)
    return (
        <AcprogramtitletypeLargeCardLayout acprogramtitletype={ acprogramtitletype } grandchildren={children}>
            <AcprogramtitletypeMediumCard acprogramtitletype={ acprogramtitletype }/>
            <AcprogramtitletypeVectorLinksCard  acprogramtitletype={ acprogramtitletype } />
            { 
                acprogramtitletype?.createdby?<MediumCard3 user={ acprogramtitletype?.createdby } label={"Createdby"} />:null
            }
            { 
                acprogramtitletype?.changedby?<MediumCard4 user={ acprogramtitletype?.changedby } label={"Changedby"} />:null
            }
        </AcprogramtitletypeLargeCardLayout>
    )
}

