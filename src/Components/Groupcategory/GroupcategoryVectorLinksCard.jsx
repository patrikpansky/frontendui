import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { GroupcategoryCardCapsule } from './GroupcategoryCardCapsule';
import { GroupcategoryCardBody } from './GroupcategoryCardBody';

export const GroupcategoryVectorLinksCard = ({ groupcategory, children, label="" }) => {
    return (
        <GroupcategoryCardCapsule groupcategory={ groupcategory } label={label} >
            <ProxyLink to={"/all/groupcategory/types/" + groupcategory.id } >types</ProxyLink><br />
        </GroupcategoryCardCapsule>        
    )
}

