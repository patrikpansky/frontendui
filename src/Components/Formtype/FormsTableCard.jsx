// field forms
// targeting to Form
// going from Formtype
import { FormtypeCardCapsule } from "./FormtypeCardCapsule";
import { FormsTable } from "../Form/FormsTable";
export const FormtypeFormsTableCard = ({ formtype , ...props}) => {
    return (
        <FormtypeCardCapsule formtype={ formtype } >
            <FormsTable forms={ formtype?.forms } {...props}>
            </FormsTable>
        </FormtypeCardCapsule>
    )
}