// field createdby
// targeting to User
// going from Acprogramtitletype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramtitletypeCreatedbyMediumCard = ({ acprogramtitletype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramtitletype?.createdby } {...props} />
    )
}