// field semester
// targeting to AcSemester
// going from Plannedlesson
import { AcsemesterMediumCard } from "../Acsemester/AcsemesterMediumCard";

export const PlannedlessonSemesterMediumCard = ({ plannedlesson , ...props}) => {
    return (
        <AcsemesterMediumCard acsemester={ plannedlesson?.semester } {...props} />
    )
}