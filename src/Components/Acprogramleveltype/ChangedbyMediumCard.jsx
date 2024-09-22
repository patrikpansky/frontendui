// field changedby
// targeting to User
// going from Acprogramleveltype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramleveltypeChangedbyMediumCard = ({ acprogramleveltype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramleveltype?.changedby } {...props} />
    )
}