import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FinancetypeCardCapsule } from './FinancetypeCardCapsule';
import { FinancetypeCardBody } from './FinancetypeCardBody';

export const FinancetypeVectorLinksCard = ({ financetype, children, label="" }) => {
    return (
        <FinancetypeCardCapsule financetype={ financetype } label={label} >
            <ProxyLink to={"/all/financetype/finances/" + financetype.id } >finances</ProxyLink><br />
        </FinancetypeCardCapsule>        
    )
}

