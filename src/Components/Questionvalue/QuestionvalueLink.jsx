import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/questionvalue/view/";
export const setLinkBase = (value) => linkBase = value;
export const QuestionvalueLink = ({ questionvalue, children}) => {
    // console.log("QuestionvalueLargeCard", questionvalue)
    return (
        <ProxyLink to={linkBase + questionvalue?.id}>{ questionvalue?.fullname || questionvalue?.name || questionvalue?.id}</ProxyLink>
    )
}

