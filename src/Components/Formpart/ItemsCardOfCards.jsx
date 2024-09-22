// field items
// targeting to FormItem
// going from Formpart
import { FormpartCardCapsule } from "./FormpartCardCapsule";
import { FormitemsCards } from "../Formitem/FormitemsCards";
import { FormpartItemsLoadMoreButton as LoadMoreButton} from "../Formpart/ItemsLoadMoreButton";

export const FormpartItemsCardOfCards = ({ formpart, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormpartCardCapsule formpart={ formpart } label={"Items"}>
            <FormitemsCards formitems={ formpart?.items } {...props} >
                <LoadMoreButton formpart={ formpart } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FormitemsCards>
        </FormpartCardCapsule>
    )
}