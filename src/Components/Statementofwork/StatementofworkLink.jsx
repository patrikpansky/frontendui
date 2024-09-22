import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/statementofwork/view/";
export const setLinkBase = (value) => linkBase = value;
export const StatementofworkLink = ({ statementofwork, children}) => {
    // console.log("StatementofworkLargeCard", statementofwork)
    return (
        <ProxyLink to={linkBase + statementofwork?.id}>{ statementofwork?.fullname || statementofwork?.name || statementofwork?.id}</ProxyLink>
    )
}

