import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/publication/view/";
export const setLinkBase = (value) => linkBase = value;
export const PublicationLink = ({ publication, children}) => {
    // console.log("PublicationLargeCard", publication)
    return (
        <ProxyLink to={linkBase + publication?.id}>{ publication?.fullname || publication?.name || publication?.id}</ProxyLink>
    )
}

