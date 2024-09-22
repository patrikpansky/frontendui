import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/group/view/";
export const setLinkBase = (value) => linkBase = value;
export const GroupLink = ({ group, children}) => {
    // console.log("GroupLargeCard", group)
    return (
        <ProxyLink to={linkBase + group?.id}>{ group?.fullname || group?.name || group?.id}</ProxyLink>
    )
}

