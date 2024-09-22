import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/statetransition/view/";
export const setLinkBase = (value) => linkBase = value;
export const StatetransitionLink = ({ statetransition, children}) => {
    // console.log("StatetransitionLargeCard", statetransition)
    return (
        <ProxyLink to={linkBase + statetransition?.id}>{ statetransition?.fullname || statetransition?.name || statetransition?.id}</ProxyLink>
    )
}

