// field type
// targeting to FormItemType
// going from Formitem
import { FormitemtypeMediumCard } from "../Formitemtype/FormitemtypeMediumCard";

export const FormitemTypeMediumCard = ({ formitem , ...props}) => {
    return (
        <FormitemtypeMediumCard formitemtype={ formitem?.type } {...props} />
    )
}