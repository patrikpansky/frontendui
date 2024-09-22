import { FacilitytypeMediumCard } from './FacilitytypeMediumCard';
import { FacilitytypeLargeCardLayout } from './FacilitytypeLargeCardLayout';
import { FacilitytypeVectorLinksCard } from './FacilitytypeVectorLinksCard';

/**/
//  Facilitytype: FacilityType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby facilitytype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby facilitytype


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ facilitytype?.createdby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ facilitytype?.changedby }/>

/**
 * Entity representing a facility type
 */
export const FacilitytypeLargeCard = ({ facilitytype, children}) => {
    // console.log("FacilitytypeLargeCard", facilitytype)
    return (
        <FacilitytypeLargeCardLayout facilitytype={ facilitytype } grandchildren={children}>
            <FacilitytypeMediumCard facilitytype={ facilitytype }/>
            <FacilitytypeVectorLinksCard  facilitytype={ facilitytype } />
            { 
                facilitytype?.createdby?<MediumCard5 user={ facilitytype?.createdby } label={"Createdby"} />:null
            }
            { 
                facilitytype?.changedby?<MediumCard6 user={ facilitytype?.changedby } label={"Changedby"} />:null
            }
        </FacilitytypeLargeCardLayout>
    )
}

