import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/plannedlesson/view/";
export const setLinkBase = (value) => linkBase = value;
export const PlannedlessonLink = ({ plannedlesson, children}) => {
    // console.log("PlannedlessonLargeCard", plannedlesson)
    return (
        <ProxyLink to={linkBase + plannedlesson?.id}>{ plannedlesson?.fullname || plannedlesson?.name || plannedlesson?.id}</ProxyLink>
    )
}

