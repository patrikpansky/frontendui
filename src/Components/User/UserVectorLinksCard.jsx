import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { UserCardCapsule } from './UserCardCapsule';
import { UserCardBody } from './UserCardBody';

export const UserVectorLinksCard = ({ user, children, label="" }) => {
    return (
        <UserCardCapsule user={ user } label={label} >
            <ProxyLink to={"/all/user/events/" + user.id } >events</ProxyLink><br />
            <ProxyLink to={"/all/user/presences/" + user.id } >presences</ProxyLink><br />
            <ProxyLink to={"/all/user/externalids/" + user.id } >externalids</ProxyLink><br />
            <ProxyLink to={"/all/user/requests/" + user.id } >requests</ProxyLink><br />
            <ProxyLink to={"/all/user/studies/" + user.id } >studies</ProxyLink><br />
            <ProxyLink to={"/all/user/classifications/" + user.id } >classifications</ProxyLink><br />
            <ProxyLink to={"/all/user/plannedlessons/" + user.id } >plannedlessons</ProxyLink><br />
            <ProxyLink to={"/all/user/authorpublications/" + user.id } >authorpublications</ProxyLink><br />
            <ProxyLink to={"/all/user/answers/" + user.id } >answers</ProxyLink><br />
            <ProxyLink to={"/all/user/roleson/" + user.id } >roleson</ProxyLink><br />
            <ProxyLink to={"/all/user/memberships/" + user.id } >memberships</ProxyLink><br />
            <ProxyLink to={"/all/user/membership/" + user.id } >membership</ProxyLink><br />
            <ProxyLink to={"/all/user/roles/" + user.id } >roles</ProxyLink><br />
            <ProxyLink to={"/all/user/memberof/" + user.id } >memberof</ProxyLink><br />
        </UserCardCapsule>        
    )
}

