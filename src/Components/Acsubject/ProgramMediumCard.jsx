// field program
// targeting to AcProgram
// going from Acsubject
import { AcprogramMediumCard } from "../Acprogram/AcprogramMediumCard";

export const AcsubjectProgramMediumCard = ({ acsubject , ...props}) => {
    return (
        <AcprogramMediumCard acprogram={ acsubject?.program } {...props} />
    )
}