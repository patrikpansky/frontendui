// field semester
// targeting to AcSemester
// going from Actopic
import { AcsemesterMediumCard } from "../Acsemester/AcsemesterMediumCard";

export const ActopicSemesterMediumCard = ({ actopic , ...props}) => {
    return (
        <AcsemesterMediumCard acsemester={ actopic?.semester } {...props} />
    )
}