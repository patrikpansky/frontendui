// field sections
// targeting to FormSection
// going from Form
import { FormCardCapsule } from "./FormCardCapsule";
import { FormsectionsTable } from "../Formsection/FormsectionsTable";
export const FormSectionsTableCard = ({ form , ...props}) => {
    return (
        <FormCardCapsule form={ form } >
            <FormsectionsTable formsections={ form?.sections } {...props}>
            </FormsectionsTable>
        </FormCardCapsule>
    )
}