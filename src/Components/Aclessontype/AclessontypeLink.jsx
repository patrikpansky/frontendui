import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/aclessontype/view/";
export const setLinkBase = (value) => linkBase = value;
export const AclessontypeLink = ({ aclessontype, children}) => {
    // console.log("AclessontypeLargeCard", aclessontype)
    return (
        <ProxyLink to={linkBase + aclessontype?.id}>{ aclessontype?.fullname || aclessontype?.name || aclessontype?.id}</ProxyLink>
    )
}

