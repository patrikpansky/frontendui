import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { MilestoneCardCapsule } from './MilestoneCardCapsule';
import { MilestoneCardBody } from './MilestoneCardBody';

export const MilestoneVectorLinksCard = ({ milestone, children, label="" }) => {
    return (
        <MilestoneCardCapsule milestone={ milestone } label={label} >
            <ProxyLink to={"/auto/milestone/previous/" + milestone.id } >previous</ProxyLink><br />
            <ProxyLink to={"/auto/milestone/nexts/" + milestone.id } >nexts</ProxyLink><br />
        </MilestoneCardCapsule>        
    )
}

