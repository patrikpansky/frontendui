import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FacilityeventstatetypeCardCapsule } from './FacilityeventstatetypeCardCapsule';
import { FacilityeventstatetypeCardBody } from './FacilityeventstatetypeCardBody';

export const FacilityeventstatetypeVectorLinksCard = ({ facilityeventstatetype, children, label="" }) => {
    return (
        <FacilityeventstatetypeCardCapsule facilityeventstatetype={ facilityeventstatetype } label={label} >
        </FacilityeventstatetypeCardCapsule>        
    )
}

