import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { UserconnectionCardCapsule } from './UserconnectionCardCapsule';
import { UserconnectionCardBody } from './UserconnectionCardBody';

export const UserconnectionVectorLinksCard = ({ userconnection, children, label="" }) => {
    return (
        <UserconnectionCardCapsule userconnection={ userconnection } label={label} >
            <ProxyLink to={"/auto/userconnection/edges/" + userconnection.id } >edges</ProxyLink><br />
        </UserconnectionCardCapsule>        
    )
}

