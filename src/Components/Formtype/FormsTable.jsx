// field forms
// targeting to Form
// going from Formtype
import { FormsTable } from "../Form/FormsTable";
import { FormLoadMoreButton } from "../Form/FormLoadMoreButton";

export const FormtypeFormsTableCard = ({ formtype, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormsTable form={ formtype?.forms } {...props}>
            <FormLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FormsTable>
    )
}