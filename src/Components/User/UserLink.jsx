import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/user/view/";
export const setLinkBase = (value) => linkBase = value;
export const UserLink = ({ user, children}) => {
    // console.log("UserLargeCard", user)
    return (
        <ProxyLink to={linkBase + user?.id}>{ user?.fullname || user?.name || user?.id}</ProxyLink>
    )
}

