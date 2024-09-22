import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FormitemtypeCardCapsule } from './FormitemtypeCardCapsule';
import { FormitemtypeCardBody } from './FormitemtypeCardBody';

export const FormitemtypeVectorLinksCard = ({ formitemtype, children, label="" }) => {
    return (
        <FormitemtypeCardCapsule formitemtype={ formitemtype } label={label} >
        </FormitemtypeCardCapsule>        
    )
}

