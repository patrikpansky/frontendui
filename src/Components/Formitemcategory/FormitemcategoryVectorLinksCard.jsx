import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FormitemcategoryCardCapsule } from './FormitemcategoryCardCapsule';
import { FormitemcategoryCardBody } from './FormitemcategoryCardBody';

export const FormitemcategoryVectorLinksCard = ({ formitemcategory, children, label="" }) => {
    return (
        <FormitemcategoryCardCapsule formitemcategory={ formitemcategory } label={label} >
            <ProxyLink to={"/auto/formitemcategory/types/" + formitemcategory.id } >types</ProxyLink><br />
        </FormitemcategoryCardCapsule>        
    )
}

