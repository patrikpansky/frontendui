import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/membership/view/";
export const setLinkBase = (value) => linkBase = value;
export const MembershipLink = ({ membership, children}) => {
    // console.log("MembershipLargeCard", membership)
    return (
        <ProxyLink to={linkBase + membership?.id}>{ membership?.fullname || membership?.name || membership?.id}</ProxyLink>
    )
}

