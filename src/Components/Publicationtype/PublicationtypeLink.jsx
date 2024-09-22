import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/publicationtype/view/";
export const setLinkBase = (value) => linkBase = value;
export const PublicationtypeLink = ({ publicationtype, children}) => {
    // console.log("PublicationtypeLargeCard", publicationtype)
    return (
        <ProxyLink to={linkBase + publicationtype?.id}>{ publicationtype?.fullname || publicationtype?.name || publicationtype?.id}</ProxyLink>
    )
}

