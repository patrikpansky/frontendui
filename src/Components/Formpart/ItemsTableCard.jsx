// field items
// targeting to FormItem
// going from Formpart
import { FormpartCardCapsule } from "./FormpartCardCapsule";
import { FormitemsTable } from "../Formitem/FormitemsTable";
export const FormpartItemsTableCard = ({ formpart , ...props}) => {
    return (
        <FormpartCardCapsule formpart={ formpart } >
            <FormitemsTable formitems={ formpart?.items } {...props}>
            </FormitemsTable>
        </FormpartCardCapsule>
    )
}