import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { UserCardCapsule } from './UserCardCapsule';
import { UserCardBody } from './UserCardBody';

export const UserVectorLinksCard = ({ user, children, label="" }) => {
    return (
        <UserCardCapsule user={ user } label={label} >
            <ProxyLink to={"/auto/user/events/" + user.id } >events</ProxyLink><br />
            <ProxyLink to={"/auto/user/presences/" + user.id } >presences</ProxyLink><br />
            <ProxyLink to={"/auto/user/externalids/" + user.id } >externalids</ProxyLink><br />
            <ProxyLink to={"/auto/user/requests/" + user.id } >requests</ProxyLink><br />
            <ProxyLink to={"/auto/user/studies/" + user.id } >studies</ProxyLink><br />
            <ProxyLink to={"/auto/user/classifications/" + user.id } >classifications</ProxyLink><br />
            <ProxyLink to={"/auto/user/plannedlessons/" + user.id } >plannedlessons</ProxyLink><br />
            <ProxyLink to={"/auto/user/authorpublications/" + user.id } >authorpublications</ProxyLink><br />
            <ProxyLink to={"/auto/user/answers/" + user.id } >answers</ProxyLink><br />
            <ProxyLink to={"/auto/user/roleson/" + user.id } >roleson</ProxyLink><br />
            <ProxyLink to={"/auto/user/memberships/" + user.id } >memberships</ProxyLink><br />
            <ProxyLink to={"/auto/user/membership/" + user.id } >membership</ProxyLink><br />
            <ProxyLink to={"/auto/user/roles/" + user.id } >roles</ProxyLink><br />
            <ProxyLink to={"/auto/user/memberof/" + user.id } >memberof</ProxyLink><br />
        </UserCardCapsule>        
    )
}

