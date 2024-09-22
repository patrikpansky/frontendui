import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FormtypeCardCapsule } from './FormtypeCardCapsule';
import { FormtypeCardBody } from './FormtypeCardBody';

export const FormtypeVectorLinksCard = ({ formtype, children, label="" }) => {
    return (
        <FormtypeCardCapsule formtype={ formtype } label={label} >
            <ProxyLink to={"/auto/formtype/forms/" + formtype.id } >forms</ProxyLink><br />
        </FormtypeCardCapsule>        
    )
}

