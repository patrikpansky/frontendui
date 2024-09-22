import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/statemachine/view/";
export const setLinkBase = (value) => linkBase = value;
export const StatemachineLink = ({ statemachine, children}) => {
    // console.log("StatemachineLargeCard", statemachine)
    return (
        <ProxyLink to={linkBase + statemachine?.id}>{ statemachine?.fullname || statemachine?.name || statemachine?.id}</ProxyLink>
    )
}

