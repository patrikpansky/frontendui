// field semester
// targeting to AcSemester
// going from Acclassification
import { AcsemesterMediumCard } from "../Acsemester/AcsemesterMediumCard";

export const AcclassificationSemesterMediumCard = ({ acclassification , ...props}) => {
    return (
        <AcsemesterMediumCard acsemester={ acclassification?.semester } {...props} />
    )
}