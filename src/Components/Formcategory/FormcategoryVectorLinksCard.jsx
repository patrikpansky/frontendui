import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FormcategoryCardCapsule } from './FormcategoryCardCapsule';
import { FormcategoryCardBody } from './FormcategoryCardBody';

export const FormcategoryVectorLinksCard = ({ formcategory, children, label="" }) => {
    return (
        <FormcategoryCardCapsule formcategory={ formcategory } label={label} >
            <ProxyLink to={"/auto/formcategory/formtypes/" + formcategory.id } >formtypes</ProxyLink><br />
        </FormcategoryCardCapsule>        
    )
}

