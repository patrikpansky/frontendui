// field parts
// targeting to FormPart
// going from Formsection
import { FormsectionCardCapsule } from "./FormsectionCardCapsule";
import { FormpartsTable } from "../Formpart/FormpartsTable";
export const FormsectionPartsTableCard = ({ formsection , ...props}) => {
    return (
        <FormsectionCardCapsule formsection={ formsection } >
            <FormpartsTable formparts={ formsection?.parts } {...props}>
            </FormpartsTable>
        </FormsectionCardCapsule>
    )
}