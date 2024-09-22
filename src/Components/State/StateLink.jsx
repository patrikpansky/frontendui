import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/state/view/";
export const setLinkBase = (value) => linkBase = value;
export const StateLink = ({ state, children}) => {
    // console.log("StateLargeCard", state)
    return (
        <ProxyLink to={linkBase + state?.id}>{ state?.fullname || state?.name || state?.id}</ProxyLink>
    )
}

