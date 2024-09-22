import { FacilityMediumCard } from './FacilityMediumCard';
import { FacilityLargeCardLayout } from './FacilityLargeCardLayout';
import { FacilityVectorLinksCard } from './FacilityVectorLinksCard';

/**/
//  Facility: Facility
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby facility

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby facility

//  Type: Facilitytype
// import { Facilitytype } from '../Facilitytype/FacilitytypeMediumCard';
// type facility

//  Eventstate: Facilityeventstatetype
// import { Facilityeventstatetype } from '../Facilityeventstatetype/FacilityeventstatetypeMediumCard';
// eventstate facility

//  Masterfacility: Facility
// import { Facility } from '../Facility/FacilityMediumCard';
// masterfacility facility

//  Group: Group
// import { Group } from '../Group/GroupMediumCard';
// group facility


import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ facility?.createdby }/>
import { UserMediumCard as MediumCard7 } from '../User/UserMediumCard';
// <MediumCard7 user={ facility?.changedby }/>
import { FacilitytypeMediumCard as MediumCard14 } from '../Facilitytype/FacilitytypeMediumCard';
// <MediumCard14 facilitytype={ facility?.type }/>
import { FacilityeventstatetypeMediumCard as MediumCard15 } from '../Facilityeventstatetype/FacilityeventstatetypeMediumCard';
// <MediumCard15 facilityeventstatetype={ facility?.eventstate }/>
import { FacilityMediumCard as MediumCard16 } from '../Facility/FacilityMediumCard';
// <MediumCard16 facility={ facility?.masterfacility }/>
import { GroupMediumCard as MediumCard18 } from '../Group/GroupMediumCard';
// <MediumCard18 group={ facility?.group }/>

/**
 * Entity representing a Facility
 */
export const FacilityLargeCard = ({ facility, children}) => {
    // console.log("FacilityLargeCard", facility)
    return (
        <FacilityLargeCardLayout facility={ facility } grandchildren={children}>
            <FacilityMediumCard facility={ facility }/>
            <FacilityVectorLinksCard  facility={ facility } />
            { 
                facility?.createdby?<MediumCard6 user={ facility?.createdby } label={"Createdby"} />:null
            }
            { 
                facility?.changedby?<MediumCard7 user={ facility?.changedby } label={"Changedby"} />:null
            }
            { 
                facility?.type?<MediumCard14 facilitytype={ facility?.type } label={"Type"} />:null
            }
            { 
                facility?.eventstate?<MediumCard15 facilityeventstatetype={ facility?.eventstate } label={"Eventstate"} />:null
            }
            { 
                facility?.masterfacility?<MediumCard16 facility={ facility?.masterfacility } label={"Masterfacility"} />:null
            }
            { 
                facility?.group?<MediumCard18 group={ facility?.group } label={"Group"} />:null
            }
        </FacilityLargeCardLayout>
    )
}

