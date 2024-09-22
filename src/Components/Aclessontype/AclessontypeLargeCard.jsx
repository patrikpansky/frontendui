import { AclessontypeMediumCard } from './AclessontypeMediumCard';
import { AclessontypeLargeCardLayout } from './AclessontypeLargeCardLayout';
import { AclessontypeVectorLinksCard } from './AclessontypeVectorLinksCard';

/**/
//  Aclessontype: AcLessonType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby aclessontype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby aclessontype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ aclessontype?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ aclessontype?.changedby }/>

/**
 * P, C, LC, S, ...
 */
export const AclessontypeLargeCard = ({ aclessontype, children}) => {
    // console.log("AclessontypeLargeCard", aclessontype)
    return (
        <AclessontypeLargeCardLayout aclessontype={ aclessontype } grandchildren={children}>
            <AclessontypeMediumCard aclessontype={ aclessontype }/>
            <AclessontypeVectorLinksCard  aclessontype={ aclessontype } />
            { 
                aclessontype?.createdby?<MediumCard3 user={ aclessontype?.createdby } label={"Createdby"} />:null
            }
            { 
                aclessontype?.changedby?<MediumCard4 user={ aclessontype?.changedby } label={"Changedby"} />:null
            }
        </AclessontypeLargeCardLayout>
    )
}

