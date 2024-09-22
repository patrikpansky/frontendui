// field createdby
// targeting to User
// going from Acprogrammessage
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogrammessageCreatedbyMediumCard = ({ acprogrammessage , ...props}) => {
    return (
        <UserMediumCard user={ acprogrammessage?.createdby } {...props} />
    )
}