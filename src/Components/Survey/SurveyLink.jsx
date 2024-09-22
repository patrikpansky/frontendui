import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/survey/view/";
export const setLinkBase = (value) => linkBase = value;
export const SurveyLink = ({ survey, children}) => {
    // console.log("SurveyLargeCard", survey)
    return (
        <ProxyLink to={linkBase + survey?.id}>{ survey?.fullname || survey?.name || survey?.id}</ProxyLink>
    )
}

