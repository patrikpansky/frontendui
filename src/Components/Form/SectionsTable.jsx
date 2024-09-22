// field sections
// targeting to FormSection
// going from Form
import { FormsectionsTable } from "../Formsection/FormsectionsTable";
import { FormsectionLoadMoreButton } from "../Formsection/FormsectionLoadMoreButton";

export const FormSectionsTableCard = ({ form, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormsectionsTable formsection={ form?.sections } {...props}>
            <FormsectionLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FormsectionsTable>
    )
}