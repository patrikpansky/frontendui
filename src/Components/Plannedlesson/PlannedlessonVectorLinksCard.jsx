import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { PlannedlessonCardCapsule } from './PlannedlessonCardCapsule';
import { PlannedlessonCardBody } from './PlannedlessonCardBody';

export const PlannedlessonVectorLinksCard = ({ plannedlesson, children, label="" }) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } label={label} >
            <ProxyLink to={"/all/plannedlesson/linkedwith/" + plannedlesson.id } >linkedwith</ProxyLink><br />
            <ProxyLink to={"/all/plannedlesson/users/" + plannedlesson.id } >users</ProxyLink><br />
            <ProxyLink to={"/all/plannedlesson/groups/" + plannedlesson.id } >groups</ProxyLink><br />
            <ProxyLink to={"/all/plannedlesson/facilities/" + plannedlesson.id } >facilities</ProxyLink><br />
        </PlannedlessonCardCapsule>        
    )
}

