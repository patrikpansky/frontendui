import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FormpartCardCapsule } from './FormpartCardCapsule';
import { FormpartCardBody } from './FormpartCardBody';

export const FormpartVectorLinksCard = ({ formpart, children, label="" }) => {
    return (
        <FormpartCardCapsule formpart={ formpart } label={label} >
            <ProxyLink to={"/all/formpart/items/" + formpart.id } >items</ProxyLink><br />
        </FormpartCardCapsule>        
    )
}

