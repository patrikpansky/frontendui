import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FacilitytypeCardCapsule } from './FacilitytypeCardCapsule';
import { FacilitytypeCardBody } from './FacilitytypeCardBody';

export const FacilitytypeVectorLinksCard = ({ facilitytype, children, label="" }) => {
    return (
        <FacilitytypeCardCapsule facilitytype={ facilitytype } label={label} >
        </FacilitytypeCardCapsule>        
    )
}

