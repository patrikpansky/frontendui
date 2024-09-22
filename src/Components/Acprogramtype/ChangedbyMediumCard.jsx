// field changedby
// targeting to User
// going from Acprogramtype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramtypeChangedbyMediumCard = ({ acprogramtype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramtype?.changedby } {...props} />
    )
}