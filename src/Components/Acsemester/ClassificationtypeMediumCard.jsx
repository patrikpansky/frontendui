// field classificationtype
// targeting to AcClassificationType
// going from Acsemester
import { AcclassificationtypeMediumCard } from "../Acclassificationtype/AcclassificationtypeMediumCard";

export const AcsemesterClassificationtypeMediumCard = ({ acsemester , ...props}) => {
    return (
        <AcclassificationtypeMediumCard acclassificationtype={ acsemester?.classificationtype } {...props} />
    )
}