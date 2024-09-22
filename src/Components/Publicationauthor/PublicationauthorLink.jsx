import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/publicationauthor/view/";
export const setLinkBase = (value) => linkBase = value;
export const PublicationauthorLink = ({ publicationauthor, children}) => {
    // console.log("PublicationauthorLargeCard", publicationauthor)
    return (
        <ProxyLink to={linkBase + publicationauthor?.id}>{ publicationauthor?.fullname || publicationauthor?.name || publicationauthor?.id}</ProxyLink>
    )
}

