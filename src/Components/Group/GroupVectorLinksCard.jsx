import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { GroupCardCapsule } from './GroupCardCapsule';
import { GroupCardBody } from './GroupCardBody';

export const GroupVectorLinksCard = ({ group, children, label="" }) => {
    return (
        <GroupCardCapsule group={ group } label={label} >
            <ProxyLink to={"/auto/group/events/" + group.id } >events</ProxyLink><br />
            <ProxyLink to={"/auto/group/externalids/" + group.id } >externalids</ProxyLink><br />
            <ProxyLink to={"/auto/group/plannedlessons/" + group.id } >plannedlessons</ProxyLink><br />
            <ProxyLink to={"/auto/group/subgroups/" + group.id } >subgroups</ProxyLink><br />
            <ProxyLink to={"/auto/group/memberships/" + group.id } >memberships</ProxyLink><br />
            <ProxyLink to={"/auto/group/roles/" + group.id } >roles</ProxyLink><br />
        </GroupCardCapsule>        
    )
}

