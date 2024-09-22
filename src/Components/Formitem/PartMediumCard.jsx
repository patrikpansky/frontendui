// field part
// targeting to FormPart
// going from Formitem
import { FormpartMediumCard } from "../Formpart/FormpartMediumCard";

export const FormitemPartMediumCard = ({ formitem , ...props}) => {
    return (
        <FormpartMediumCard formpart={ formitem?.part } {...props} />
    )
}