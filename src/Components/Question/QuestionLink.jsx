import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/question/view/";
export const setLinkBase = (value) => linkBase = value;
export const QuestionLink = ({ question, children}) => {
    // console.log("QuestionLargeCard", question)
    return (
        <ProxyLink to={linkBase + question?.id}>{ question?.fullname || question?.name || question?.id}</ProxyLink>
    )
}

