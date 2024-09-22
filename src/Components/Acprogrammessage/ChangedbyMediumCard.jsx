// field changedby
// targeting to User
// going from Acprogrammessage
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogrammessageChangedbyMediumCard = ({ acprogrammessage , ...props}) => {
    return (
        <UserMediumCard user={ acprogrammessage?.changedby } {...props} />
    )
}