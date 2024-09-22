import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/facility/view/";
export const setLinkBase = (value) => linkBase = value;
export const FacilityLink = ({ facility, children}) => {
    // console.log("FacilityLargeCard", facility)
    return (
        <ProxyLink to={linkBase + facility?.id}>{ facility?.fullname || facility?.name || facility?.id}</ProxyLink>
    )
}

