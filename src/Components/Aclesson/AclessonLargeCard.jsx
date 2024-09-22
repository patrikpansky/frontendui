import { AclessonMediumCard } from './AclessonMediumCard';
import { AclessonLargeCardLayout } from './AclessonLargeCardLayout';
import { AclessonVectorLinksCard } from './AclessonVectorLinksCard';

/**/
//  Aclesson: AcLesson
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby aclesson

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby aclesson

//  Type: Aclessontype
// import { Aclessontype } from '../Aclessontype/AclessontypeMediumCard';
// type aclesson

//  Topic: Actopic
// import { Actopic } from '../Actopic/ActopicMediumCard';
// topic aclesson


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ aclesson?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ aclesson?.changedby }/>
import { AclessontypeMediumCard as MediumCard7 } from '../Aclessontype/AclessontypeMediumCard';
// <MediumCard7 aclessontype={ aclesson?.type }/>
import { ActopicMediumCard as MediumCard9 } from '../Actopic/ActopicMediumCard';
// <MediumCard9 actopic={ aclesson?.topic }/>

/**
 * Entity which represents single lesson included in a topic
 */
export const AclessonLargeCard = ({ aclesson, children}) => {
    // console.log("AclessonLargeCard", aclesson)
    return (
        <AclessonLargeCardLayout aclesson={ aclesson } grandchildren={children}>
            <AclessonMediumCard aclesson={ aclesson }/>
            <AclessonVectorLinksCard  aclesson={ aclesson } />
            { 
                aclesson?.createdby?<MediumCard3 user={ aclesson?.createdby } label={"Createdby"} />:null
            }
            { 
                aclesson?.changedby?<MediumCard4 user={ aclesson?.changedby } label={"Changedby"} />:null
            }
            { 
                aclesson?.type?<MediumCard7 aclessontype={ aclesson?.type } label={"Type"} />:null
            }
            { 
                aclesson?.topic?<MediumCard9 actopic={ aclesson?.topic } label={"Topic"} />:null
            }
        </AclessonLargeCardLayout>
    )
}

