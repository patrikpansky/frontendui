import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { GroupconnectionCardCapsule } from './GroupconnectionCardCapsule';
import { GroupconnectionCardBody } from './GroupconnectionCardBody';

export const GroupconnectionVectorLinksCard = ({ groupconnection, children, label="" }) => {
    return (
        <GroupconnectionCardCapsule groupconnection={ groupconnection } label={label} >
            <ProxyLink to={"/auto/groupconnection/edges/" + groupconnection.id } >edges</ProxyLink><br />
        </GroupconnectionCardCapsule>        
    )
}

