import { AcprogramtypeMediumCard } from './AcprogramtypeMediumCard';
import { AcprogramtypeLargeCardLayout } from './AcprogramtypeLargeCardLayout';
import { AcprogramtypeVectorLinksCard } from './AcprogramtypeVectorLinksCard';

/**/
//  Acprogramtype: AcProgramType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acprogramtype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acprogramtype

//  Level: Acprogramleveltype
// import { Acprogramleveltype } from '../Acprogramleveltype/AcprogramleveltypeMediumCard';
// level acprogramtype

//  Form: Acprogramformtype
// import { Acprogramformtype } from '../Acprogramformtype/AcprogramformtypeMediumCard';
// form acprogramtype

//  Language: Acprogramlanguagetype
// import { Acprogramlanguagetype } from '../Acprogramlanguagetype/AcprogramlanguagetypeMediumCard';
// language acprogramtype

//  Title: Acprogramtitletype
// import { Acprogramtitletype } from '../Acprogramtitletype/AcprogramtitletypeMediumCard';
// title acprogramtype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acprogramtype?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acprogramtype?.changedby }/>
import { AcprogramleveltypeMediumCard as MediumCard7 } from '../Acprogramleveltype/AcprogramleveltypeMediumCard';
// <MediumCard7 acprogramleveltype={ acprogramtype?.level }/>
import { AcprogramformtypeMediumCard as MediumCard8 } from '../Acprogramformtype/AcprogramformtypeMediumCard';
// <MediumCard8 acprogramformtype={ acprogramtype?.form }/>
import { AcprogramlanguagetypeMediumCard as MediumCard9 } from '../Acprogramlanguagetype/AcprogramlanguagetypeMediumCard';
// <MediumCard9 acprogramlanguagetype={ acprogramtype?.language }/>
import { AcprogramtitletypeMediumCard as MediumCard10 } from '../Acprogramtitletype/AcprogramtitletypeMediumCard';
// <MediumCard10 acprogramtitletype={ acprogramtype?.title }/>

/**
 * Encapsulation of language, level, type etc. of program. This is intermediate entity for acredited program and its types
 */
export const AcprogramtypeLargeCard = ({ acprogramtype, children}) => {
    // console.log("AcprogramtypeLargeCard", acprogramtype)
    return (
        <AcprogramtypeLargeCardLayout acprogramtype={ acprogramtype } grandchildren={children}>
            <AcprogramtypeMediumCard acprogramtype={ acprogramtype }/>
            <AcprogramtypeVectorLinksCard  acprogramtype={ acprogramtype } />
            { 
                acprogramtype?.createdby?<MediumCard3 user={ acprogramtype?.createdby } label={"Createdby"} />:null
            }
            { 
                acprogramtype?.changedby?<MediumCard4 user={ acprogramtype?.changedby } label={"Changedby"} />:null
            }
            { 
                acprogramtype?.level?<MediumCard7 acprogramleveltype={ acprogramtype?.level } label={"Level"} />:null
            }
            { 
                acprogramtype?.form?<MediumCard8 acprogramformtype={ acprogramtype?.form } label={"Form"} />:null
            }
            { 
                acprogramtype?.language?<MediumCard9 acprogramlanguagetype={ acprogramtype?.language } label={"Language"} />:null
            }
            { 
                acprogramtype?.title?<MediumCard10 acprogramtitletype={ acprogramtype?.title } label={"Title"} />:null
            }
        </AcprogramtypeLargeCardLayout>
    )
}

