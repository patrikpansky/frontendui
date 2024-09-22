import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FacilityCardCapsule } from './FacilityCardCapsule';
import { FacilityCardBody } from './FacilityCardBody';

export const FacilityVectorLinksCard = ({ facility, children, label="" }) => {
    return (
        <FacilityCardCapsule facility={ facility } label={label} >
            <ProxyLink to={"/auto/facility/externalids/" + facility.id } >externalids</ProxyLink><br />
            <ProxyLink to={"/auto/facility/subfacilities/" + facility.id } >subfacilities</ProxyLink><br />
            <ProxyLink to={"/auto/facility/plannedlessons/" + facility.id } >plannedlessons</ProxyLink><br />
        </FacilityCardCapsule>        
    )
}

