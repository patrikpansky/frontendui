import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/acclassification/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcclassificationLink = ({ acclassification, children}) => {
    // console.log("AcclassificationLargeCard", acclassification)
    return (
        <ProxyLink to={linkBase + acclassification?.id}>{ acclassification?.fullname || acclassification?.name || acclassification?.id}</ProxyLink>
    )
}

