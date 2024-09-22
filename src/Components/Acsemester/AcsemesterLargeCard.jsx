import { AcsemesterMediumCard } from './AcsemesterMediumCard';
import { AcsemesterLargeCardLayout } from './AcsemesterLargeCardLayout';
import { AcsemesterVectorLinksCard } from './AcsemesterVectorLinksCard';

/**/
//  Acsemester: AcSemester
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acsemester

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acsemester

//  Subject: Acsubject
// import { Acsubject } from '../Acsubject/AcsubjectMediumCard';
// subject acsemester

//  Classificationtype: Acclassificationtype
// import { Acclassificationtype } from '../Acclassificationtype/AcclassificationtypeMediumCard';
// classificationtype acsemester


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ acsemester?.createdby }/>
import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ acsemester?.changedby }/>
import { AcsubjectMediumCard as MediumCard6 } from '../Acsubject/AcsubjectMediumCard';
// <MediumCard6 acsubject={ acsemester?.subject }/>
import { AcclassificationtypeMediumCard as MediumCard7 } from '../Acclassificationtype/AcclassificationtypeMediumCard';
// <MediumCard7 acclassificationtype={ acsemester?.classificationtype }/>

/**
 * Entity representing each semester in study subject
 */
export const AcsemesterLargeCard = ({ acsemester, children}) => {
    // console.log("AcsemesterLargeCard", acsemester)
    return (
        <AcsemesterLargeCardLayout acsemester={ acsemester } grandchildren={children}>
            <AcsemesterMediumCard acsemester={ acsemester }/>
            <AcsemesterVectorLinksCard  acsemester={ acsemester } />
            { 
                acsemester?.createdby?<MediumCard1 user={ acsemester?.createdby } label={"Createdby"} />:null
            }
            { 
                acsemester?.changedby?<MediumCard2 user={ acsemester?.changedby } label={"Changedby"} />:null
            }
            { 
                acsemester?.subject?<MediumCard6 acsubject={ acsemester?.subject } label={"Subject"} />:null
            }
            { 
                acsemester?.classificationtype?<MediumCard7 acclassificationtype={ acsemester?.classificationtype } label={"Classificationtype"} />:null
            }
        </AcsemesterLargeCardLayout>
    )
}

