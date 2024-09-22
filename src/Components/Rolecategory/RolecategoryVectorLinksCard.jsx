import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { RolecategoryCardCapsule } from './RolecategoryCardCapsule';
import { RolecategoryCardBody } from './RolecategoryCardBody';

export const RolecategoryVectorLinksCard = ({ rolecategory, children, label="" }) => {
    return (
        <RolecategoryCardCapsule rolecategory={ rolecategory } label={label} >
            <ProxyLink to={"/all/rolecategory/roletypes/" + rolecategory.id } >roletypes</ProxyLink><br />
        </RolecategoryCardCapsule>        
    )
}

