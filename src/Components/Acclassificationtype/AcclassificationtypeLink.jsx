import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/acclassificationtype/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcclassificationtypeLink = ({ acclassificationtype, children}) => {
    // console.log("AcclassificationtypeLargeCard", acclassificationtype)
    return (
        <ProxyLink to={linkBase + acclassificationtype?.id}>{ acclassificationtype?.fullname || acclassificationtype?.name || acclassificationtype?.id}</ProxyLink>
    )
}

