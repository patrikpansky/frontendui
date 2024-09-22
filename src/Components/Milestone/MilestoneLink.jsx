import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/milestone/view/";
export const setLinkBase = (value) => linkBase = value;
export const MilestoneLink = ({ milestone, children}) => {
    // console.log("MilestoneLargeCard", milestone)
    return (
        <ProxyLink to={linkBase + milestone?.id}>{ milestone?.fullname || milestone?.name || milestone?.id}</ProxyLink>
    )
}

