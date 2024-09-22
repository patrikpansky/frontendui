import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { PlanCardCapsule } from './PlanCardCapsule';
import { PlanCardBody } from './PlanCardBody';

export const PlanVectorLinksCard = ({ plan, children, label="" }) => {
    return (
        <PlanCardCapsule plan={ plan } label={label} >
            <ProxyLink to={"/all/plan/lessons/" + plan.id } >lessons</ProxyLink><br />
        </PlanCardCapsule>        
    )
}

