// field type
// targeting to FormType
// going from Form
import { FormtypeMediumCard } from "../Formtype/FormtypeMediumCard";

export const FormTypeMediumCard = ({ form , ...props}) => {
    return (
        <FormtypeMediumCard formtype={ form?.type } {...props} />
    )
}