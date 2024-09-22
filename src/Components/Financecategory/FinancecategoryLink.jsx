import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/financecategory/view/";
export const setLinkBase = (value) => linkBase = value;
export const FinancecategoryLink = ({ financecategory, children}) => {
    // console.log("FinancecategoryLargeCard", financecategory)
    return (
        <ProxyLink to={linkBase + financecategory?.id}>{ financecategory?.fullname || financecategory?.name || financecategory?.id}</ProxyLink>
    )
}

