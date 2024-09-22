import { ActopicMediumCard } from './ActopicMediumCard';
import { ActopicLargeCardLayout } from './ActopicLargeCardLayout';
import { ActopicVectorLinksCard } from './ActopicVectorLinksCard';

/**/
//  Actopic: AcTopic
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby actopic

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby actopic

//  Semester: Acsemester
// import { Acsemester } from '../Acsemester/AcsemesterMediumCard';
// semester actopic


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ actopic?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ actopic?.changedby }/>
import { AcsemesterMediumCard as MediumCard8 } from '../Acsemester/AcsemesterMediumCard';
// <MediumCard8 acsemester={ actopic?.semester }/>

/**
 * Entity which represents a theme included in semester of subject
 */
export const ActopicLargeCard = ({ actopic, children}) => {
    // console.log("ActopicLargeCard", actopic)
    return (
        <ActopicLargeCardLayout actopic={ actopic } grandchildren={children}>
            <ActopicMediumCard actopic={ actopic }/>
            <ActopicVectorLinksCard  actopic={ actopic } />
            { 
                actopic?.createdby?<MediumCard3 user={ actopic?.createdby } label={"Createdby"} />:null
            }
            { 
                actopic?.changedby?<MediumCard4 user={ actopic?.changedby } label={"Changedby"} />:null
            }
            { 
                actopic?.semester?<MediumCard8 acsemester={ actopic?.semester } label={"Semester"} />:null
            }
        </ActopicLargeCardLayout>
    )
}

