// field formtypes
// targeting to FormType
// going from Formcategory
import { FormcategoryCardCapsule } from "./FormcategoryCardCapsule";
import { FormtypesCards } from "../Formtype/FormtypesCards";
import { FormcategoryFormtypesLoadMoreButton as LoadMoreButton} from "../Formcategory/FormtypesLoadMoreButton";

export const FormcategoryFormtypesCardOfCards = ({ formcategory, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormcategoryCardCapsule formcategory={ formcategory } label={"Formtypes"}>
            <FormtypesCards formtypes={ formcategory?.formtypes } {...props} >
                <LoadMoreButton formcategory={ formcategory } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FormtypesCards>
        </FormcategoryCardCapsule>
    )
}