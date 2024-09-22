import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { StatementofworkCardCapsule } from './StatementofworkCardCapsule';
import { StatementofworkCardBody } from './StatementofworkCardBody';

export const StatementofworkVectorLinksCard = ({ statementofwork, children, label="" }) => {
    return (
        <StatementofworkCardCapsule statementofwork={ statementofwork } label={label} >
        </StatementofworkCardCapsule>        
    )
}

