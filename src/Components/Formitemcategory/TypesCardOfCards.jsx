// field types
// targeting to FormItemType
// going from Formitemcategory
import { FormitemcategoryCardCapsule } from "./FormitemcategoryCardCapsule";
import { FormitemtypesCards } from "../Formitemtype/FormitemtypesCards";
import { FormitemcategoryTypesLoadMoreButton as LoadMoreButton} from "../Formitemcategory/TypesLoadMoreButton";

export const FormitemcategoryTypesCardOfCards = ({ formitemcategory, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormitemcategoryCardCapsule formitemcategory={ formitemcategory } label={"Types"}>
            <FormitemtypesCards formitemtypes={ formitemcategory?.types } {...props} >
                <LoadMoreButton formitemcategory={ formitemcategory } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FormitemtypesCards>
        </FormitemcategoryCardCapsule>
    )
}