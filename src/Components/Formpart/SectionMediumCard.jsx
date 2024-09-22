// field section
// targeting to FormSection
// going from Formpart
import { FormsectionMediumCard } from "../Formsection/FormsectionMediumCard";

export const FormpartSectionMediumCard = ({ formpart , ...props}) => {
    return (
        <FormsectionMediumCard formsection={ formpart?.section } {...props} />
    )
}