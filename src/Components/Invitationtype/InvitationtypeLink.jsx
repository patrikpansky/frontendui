import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/invitationtype/view/";
export const setLinkBase = (value) => linkBase = value;
export const InvitationtypeLink = ({ invitationtype, children}) => {
    // console.log("InvitationtypeLargeCard", invitationtype)
    return (
        <ProxyLink to={linkBase + invitationtype?.id}>{ invitationtype?.fullname || invitationtype?.name || invitationtype?.id}</ProxyLink>
    )
}

