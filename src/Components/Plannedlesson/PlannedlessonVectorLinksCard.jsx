import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { PlannedlessonCardCapsule } from './PlannedlessonCardCapsule';
import { PlannedlessonCardBody } from './PlannedlessonCardBody';

export const PlannedlessonVectorLinksCard = ({ plannedlesson, children, label="" }) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } label={label} >
            <ProxyLink to={"/auto/plannedlesson/linkedwith/" + plannedlesson.id } >linkedwith</ProxyLink><br />
            <ProxyLink to={"/auto/plannedlesson/users/" + plannedlesson.id } >users</ProxyLink><br />
            <ProxyLink to={"/auto/plannedlesson/groups/" + plannedlesson.id } >groups</ProxyLink><br />
            <ProxyLink to={"/auto/plannedlesson/facilities/" + plannedlesson.id } >facilities</ProxyLink><br />
        </PlannedlessonCardCapsule>        
    )
}

