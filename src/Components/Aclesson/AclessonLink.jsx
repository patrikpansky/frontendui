import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/aclesson/view/";
export const setLinkBase = (value) => linkBase = value;
export const AclessonLink = ({ aclesson, children}) => {
    // console.log("AclessonLargeCard", aclesson)
    return (
        <ProxyLink to={linkBase + aclesson?.id}>{ aclesson?.fullname || aclesson?.name || aclesson?.id}</ProxyLink>
    )
}

