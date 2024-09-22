// field state
// targeting to AcProgramStudentState
// going from Acprogramstudent
import { AcprogramstudentstateMediumCard } from "../Acprogramstudentstate/AcprogramstudentstateMediumCard";

export const AcprogramstudentStateMediumCard = ({ acprogramstudent , ...props}) => {
    return (
        <AcprogramstudentstateMediumCard acprogramstudentstate={ acprogramstudent?.state } {...props} />
    )
}