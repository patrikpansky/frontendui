import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { GrouptypeCardCapsule } from './GrouptypeCardCapsule';
import { GrouptypeCardBody } from './GrouptypeCardBody';

export const GrouptypeVectorLinksCard = ({ grouptype, children, label="" }) => {
    return (
        <GrouptypeCardCapsule grouptype={ grouptype } label={label} >
        </GrouptypeCardCapsule>        
    )
}

