// field form
// targeting to Form
// going from Requesthistory
import { FormMediumCard } from "../Form/FormMediumCard";

export const RequesthistoryFormMediumCard = ({ requesthistory , ...props}) => {
    return (
        <FormMediumCard form={ requesthistory?.form } {...props} />
    )
}