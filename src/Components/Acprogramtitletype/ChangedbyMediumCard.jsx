// field changedby
// targeting to User
// going from Acprogramtitletype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramtitletypeChangedbyMediumCard = ({ acprogramtitletype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramtitletype?.changedby } {...props} />
    )
}