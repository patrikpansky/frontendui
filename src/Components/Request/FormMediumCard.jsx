// field form
// targeting to Form
// going from Request
import { FormMediumCard } from "../Form/FormMediumCard";

export const RequestFormMediumCard = ({ request , ...props}) => {
    return (
        <FormMediumCard form={ request?.form } {...props} />
    )
}