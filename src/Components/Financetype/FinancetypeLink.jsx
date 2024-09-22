import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/financetype/view/";
export const setLinkBase = (value) => linkBase = value;
export const FinancetypeLink = ({ financetype, children}) => {
    // console.log("FinancetypeLargeCard", financetype)
    return (
        <ProxyLink to={linkBase + financetype?.id}>{ financetype?.fullname || financetype?.name || financetype?.id}</ProxyLink>
    )
}

