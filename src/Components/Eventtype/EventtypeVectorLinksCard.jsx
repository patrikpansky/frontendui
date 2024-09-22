import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { EventtypeCardCapsule } from './EventtypeCardCapsule';
import { EventtypeCardBody } from './EventtypeCardBody';

export const EventtypeVectorLinksCard = ({ eventtype, children, label="" }) => {
    return (
        <EventtypeCardCapsule eventtype={ eventtype } label={label} >
        </EventtypeCardCapsule>        
    )
}

