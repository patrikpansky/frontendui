import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/facilityeventstatetype/view/";
export const setLinkBase = (value) => linkBase = value;
export const FacilityeventstatetypeLink = ({ facilityeventstatetype, children}) => {
    // console.log("FacilityeventstatetypeLargeCard", facilityeventstatetype)
    return (
        <ProxyLink to={linkBase + facilityeventstatetype?.id}>{ facilityeventstatetype?.fullname || facilityeventstatetype?.name || facilityeventstatetype?.id}</ProxyLink>
    )
}

