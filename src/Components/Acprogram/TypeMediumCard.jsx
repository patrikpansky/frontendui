// field type
// targeting to AcProgramType
// going from Acprogram
import { AcprogramtypeMediumCard } from "../Acprogramtype/AcprogramtypeMediumCard";

export const AcprogramTypeMediumCard = ({ acprogram , ...props}) => {
    return (
        <AcprogramtypeMediumCard acprogramtype={ acprogram?.type } {...props} />
    )
}