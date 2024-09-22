// field level
// targeting to AcProgramLevelType
// going from Acprogramtype
import { AcprogramleveltypeMediumCard } from "../Acprogramleveltype/AcprogramleveltypeMediumCard";

export const AcprogramtypeLevelMediumCard = ({ acprogramtype , ...props}) => {
    return (
        <AcprogramleveltypeMediumCard acprogramleveltype={ acprogramtype?.level } {...props} />
    )
}