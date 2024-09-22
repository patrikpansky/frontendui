import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/requesthistory/view/";
export const setLinkBase = (value) => linkBase = value;
export const RequesthistoryLink = ({ requesthistory, children}) => {
    // console.log("RequesthistoryLargeCard", requesthistory)
    return (
        <ProxyLink to={linkBase + requesthistory?.id}>{ requesthistory?.fullname || requesthistory?.name || requesthistory?.id}</ProxyLink>
    )
}

