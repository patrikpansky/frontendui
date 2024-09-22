// field form
// targeting to AcProgramFormType
// going from Acprogramtype
import { AcprogramformtypeMediumCard } from "../Acprogramformtype/AcprogramformtypeMediumCard";

export const AcprogramtypeFormMediumCard = ({ acprogramtype , ...props}) => {
    return (
        <AcprogramformtypeMediumCard acprogramformtype={ acprogramtype?.form } {...props} />
    )
}