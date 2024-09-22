import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FormCardCapsule } from './FormCardCapsule';
import { FormCardBody } from './FormCardBody';

export const FormVectorLinksCard = ({ form, children, label="" }) => {
    return (
        <FormCardCapsule form={ form } label={label} >
            <ProxyLink to={"/all/form/sections/" + form.id } >sections</ProxyLink><br />
        </FormCardCapsule>        
    )
}

