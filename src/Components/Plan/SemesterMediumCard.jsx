// field semester
// targeting to AcSemester
// going from Plan
import { AcsemesterMediumCard } from "../Acsemester/AcsemesterMediumCard";

export const PlanSemesterMediumCard = ({ plan , ...props}) => {
    return (
        <AcsemesterMediumCard acsemester={ plan?.semester } {...props} />
    )
}