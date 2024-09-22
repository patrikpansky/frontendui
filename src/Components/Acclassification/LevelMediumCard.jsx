// field level
// targeting to AcClassificationLevel
// going from Acclassification
import { AcclassificationlevelMediumCard } from "../Acclassificationlevel/AcclassificationlevelMediumCard";

export const AcclassificationLevelMediumCard = ({ acclassification , ...props}) => {
    return (
        <AcclassificationlevelMediumCard acclassificationlevel={ acclassification?.level } {...props} />
    )
}