import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/acsubject/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcsubjectLink = ({ acsubject, children}) => {
    // console.log("AcsubjectLargeCard", acsubject)
    return (
        <ProxyLink to={linkBase + acsubject?.id}>{ acsubject?.fullname || acsubject?.name || acsubject?.id}</ProxyLink>
    )
}

