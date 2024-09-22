// field subject
// targeting to AcSubject
// going from Acsemester
import { AcsubjectMediumCard } from "../Acsubject/AcsubjectMediumCard";

export const AcsemesterSubjectMediumCard = ({ acsemester , ...props}) => {
    return (
        <AcsubjectMediumCard acsubject={ acsemester?.subject } {...props} />
    )
}