import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/finance/view/";
export const setLinkBase = (value) => linkBase = value;
export const FinanceLink = ({ finance, children}) => {
    // console.log("FinanceLargeCard", finance)
    return (
        <ProxyLink to={linkBase + finance?.id}>{ finance?.fullname || finance?.name || finance?.id}</ProxyLink>
    )
}

