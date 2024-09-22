import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/answer/view/";
export const setLinkBase = (value) => linkBase = value;
export const AnswerLink = ({ answer, children}) => {
    // console.log("AnswerLargeCard", answer)
    return (
        <ProxyLink to={linkBase + answer?.id}>{ answer?.fullname || answer?.name || answer?.id}</ProxyLink>
    )
}

