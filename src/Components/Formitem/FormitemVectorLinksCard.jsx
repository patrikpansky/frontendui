import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FormitemCardCapsule } from './FormitemCardCapsule';
import { FormitemCardBody } from './FormitemCardBody';

export const FormitemVectorLinksCard = ({ formitem, children, label="" }) => {
    return (
        <FormitemCardCapsule formitem={ formitem } label={label} >
        </FormitemCardCapsule>        
    )
}

