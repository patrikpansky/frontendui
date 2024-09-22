import { FacilityeventstatetypeMediumCard } from './FacilityeventstatetypeMediumCard';
import { FacilityeventstatetypeLargeCardLayout } from './FacilityeventstatetypeLargeCardLayout';
import { FacilityeventstatetypeVectorLinksCard } from './FacilityeventstatetypeVectorLinksCard';

/**/
//  Facilityeventstatetype: FacilityEventStateType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby facilityeventstatetype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby facilityeventstatetype


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ facilityeventstatetype?.createdby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ facilityeventstatetype?.changedby }/>

/**
 * Entity representing a facility type
 */
export const FacilityeventstatetypeLargeCard = ({ facilityeventstatetype, children}) => {
    // console.log("FacilityeventstatetypeLargeCard", facilityeventstatetype)
    return (
        <FacilityeventstatetypeLargeCardLayout facilityeventstatetype={ facilityeventstatetype } grandchildren={children}>
            <FacilityeventstatetypeMediumCard facilityeventstatetype={ facilityeventstatetype }/>
            <FacilityeventstatetypeVectorLinksCard  facilityeventstatetype={ facilityeventstatetype } />
            { 
                facilityeventstatetype?.createdby?<MediumCard5 user={ facilityeventstatetype?.createdby } label={"Createdby"} />:null
            }
            { 
                facilityeventstatetype?.changedby?<MediumCard6 user={ facilityeventstatetype?.changedby } label={"Changedby"} />:null
            }
        </FacilityeventstatetypeLargeCardLayout>
    )
}

