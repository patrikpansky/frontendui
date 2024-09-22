// field parts
// targeting to FormPart
// going from Formsection
import { FormpartsTable } from "../Formpart/FormpartsTable";
import { FormpartLoadMoreButton } from "../Formpart/FormpartLoadMoreButton";

export const FormsectionPartsTableCard = ({ formsection, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormpartsTable formpart={ formsection?.parts } {...props}>
            <FormpartLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FormpartsTable>
    )
}