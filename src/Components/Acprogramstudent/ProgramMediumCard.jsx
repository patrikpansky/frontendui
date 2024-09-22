// field program
// targeting to AcProgram
// going from Acprogramstudent
import { AcprogramMediumCard } from "../Acprogram/AcprogramMediumCard";

export const AcprogramstudentProgramMediumCard = ({ acprogramstudent , ...props}) => {
    return (
        <AcprogramMediumCard acprogram={ acprogramstudent?.program } {...props} />
    )
}