// field items
// targeting to FormItem
// going from Formpart
import { FormitemsTable } from "../Formitem/FormitemsTable";
import { FormitemLoadMoreButton } from "../Formitem/FormitemLoadMoreButton";

export const FormpartItemsTableCard = ({ formpart, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormitemsTable formitem={ formpart?.items } {...props}>
            <FormitemLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FormitemsTable>
    )
}