import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/surveytype/view/";
export const setLinkBase = (value) => linkBase = value;
export const SurveytypeLink = ({ surveytype, children}) => {
    // console.log("SurveytypeLargeCard", surveytype)
    return (
        <ProxyLink to={linkBase + surveytype?.id}>{ surveytype?.fullname || surveytype?.name || surveytype?.id}</ProxyLink>
    )
}

