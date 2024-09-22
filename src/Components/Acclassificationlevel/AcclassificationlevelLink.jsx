import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/acclassificationlevel/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcclassificationlevelLink = ({ acclassificationlevel, children}) => {
    // console.log("AcclassificationlevelLargeCard", acclassificationlevel)
    return (
        <ProxyLink to={linkBase + acclassificationlevel?.id}>{ acclassificationlevel?.fullname || acclassificationlevel?.name || acclassificationlevel?.id}</ProxyLink>
    )
}

