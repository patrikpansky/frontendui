import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/acsemester/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcsemesterLink = ({ acsemester, children}) => {
    // console.log("AcsemesterLargeCard", acsemester)
    return (
        <ProxyLink to={linkBase + acsemester?.id}>{ acsemester?.fullname || acsemester?.name || acsemester?.id}</ProxyLink>
    )
}

