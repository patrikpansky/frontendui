// field program
// targeting to AcProgram
// going from Acprogrammessage
import { AcprogramMediumCard } from "../Acprogram/AcprogramMediumCard";

export const AcprogrammessageProgramMediumCard = ({ acprogrammessage , ...props}) => {
    return (
        <AcprogramMediumCard acprogram={ acprogrammessage?.program } {...props} />
    )
}