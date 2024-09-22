// field form
// targeting to Form
// going from Formsection
import { FormMediumCard } from "../Form/FormMediumCard";

export const FormsectionFormMediumCard = ({ formsection , ...props}) => {
    return (
        <FormMediumCard form={ formsection?.form } {...props} />
    )
}