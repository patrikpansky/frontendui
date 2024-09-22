// field language
// targeting to AcProgramLanguageType
// going from Acprogramtype
import { AcprogramlanguagetypeMediumCard } from "../Acprogramlanguagetype/AcprogramlanguagetypeMediumCard";

export const AcprogramtypeLanguageMediumCard = ({ acprogramtype , ...props}) => {
    return (
        <AcprogramlanguagetypeMediumCard acprogramlanguagetype={ acprogramtype?.language } {...props} />
    )
}