import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FinancecategoryCardCapsule } from './FinancecategoryCardCapsule';
import { FinancecategoryCardBody } from './FinancecategoryCardBody';

export const FinancecategoryVectorLinksCard = ({ financecategory, children, label="" }) => {
    return (
        <FinancecategoryCardCapsule financecategory={ financecategory } label={label} >
        </FinancecategoryCardCapsule>        
    )
}

