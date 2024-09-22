// field changedby
// targeting to User
// going from Acprogramformtype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramformtypeChangedbyMediumCard = ({ acprogramformtype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramformtype?.changedby } {...props} />
    )
}