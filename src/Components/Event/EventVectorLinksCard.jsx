import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { EventCardCapsule } from './EventCardCapsule';
import { EventCardBody } from './EventCardBody';

export const EventVectorLinksCard = ({ event, children, label="" }) => {
    return (
        <EventCardCapsule event={ event } label={label} >
            <ProxyLink to={"/auto/event/groups/" + event.id } >groups</ProxyLink><br />
            <ProxyLink to={"/auto/event/users/" + event.id } >users</ProxyLink><br />
            <ProxyLink to={"/auto/event/presences/" + event.id } >presences</ProxyLink><br />
            <ProxyLink to={"/auto/event/subevents/" + event.id } >subevents</ProxyLink><br />
            <ProxyLink to={"/auto/event/externalids/" + event.id } >externalids</ProxyLink><br />
        </EventCardCapsule>        
    )
}

