import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/formsection/view/";
export const setLinkBase = (value) => linkBase = value;
export const FormsectionLink = ({ formsection, children}) => {
    // console.log("FormsectionLargeCard", formsection)
    return (
        <ProxyLink to={linkBase + formsection?.id}>{ formsection?.fullname || formsection?.name || formsection?.id}</ProxyLink>
    )
}

