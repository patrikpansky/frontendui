import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/facilitytype/view/";
export const setLinkBase = (value) => linkBase = value;
export const FacilitytypeLink = ({ facilitytype, children}) => {
    // console.log("FacilitytypeLargeCard", facilitytype)
    return (
        <ProxyLink to={linkBase + facilitytype?.id}>{ facilitytype?.fullname || facilitytype?.name || facilitytype?.id}</ProxyLink>
    )
}

