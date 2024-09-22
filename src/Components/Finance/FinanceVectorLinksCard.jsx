import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FinanceCardCapsule } from './FinanceCardCapsule';
import { FinanceCardBody } from './FinanceCardBody';

export const FinanceVectorLinksCard = ({ finance, children, label="" }) => {
    return (
        <FinanceCardCapsule finance={ finance } label={label} >
            <ProxyLink to={"/all/finance/financetype/" + finance.id } >financetype</ProxyLink><br />
        </FinanceCardCapsule>        
    )
}

