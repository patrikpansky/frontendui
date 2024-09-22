import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/plan/view/";
export const setLinkBase = (value) => linkBase = value;
export const PlanLink = ({ plan, children}) => {
    // console.log("PlanLargeCard", plan)
    return (
        <ProxyLink to={linkBase + plan?.id}>{ plan?.fullname || plan?.name || plan?.id}</ProxyLink>
    )
}

