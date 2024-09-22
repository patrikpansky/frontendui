import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/questiontype/view/";
export const setLinkBase = (value) => linkBase = value;
export const QuestiontypeLink = ({ questiontype, children}) => {
    // console.log("QuestiontypeLargeCard", questiontype)
    return (
        <ProxyLink to={linkBase + questiontype?.id}>{ questiontype?.fullname || questiontype?.name || questiontype?.id}</ProxyLink>
    )
}

