// field title
// targeting to AcProgramTitleType
// going from Acprogramtype
import { AcprogramtitletypeMediumCard } from "../Acprogramtitletype/AcprogramtitletypeMediumCard";

export const AcprogramtypeTitleMediumCard = ({ acprogramtype , ...props}) => {
    return (
        <AcprogramtitletypeMediumCard acprogramtitletype={ acprogramtype?.title } {...props} />
    )
}