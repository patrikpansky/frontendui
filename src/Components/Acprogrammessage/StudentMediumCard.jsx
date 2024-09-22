// field student
// targeting to User
// going from Acprogrammessage
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogrammessageStudentMediumCard = ({ acprogrammessage , ...props}) => {
    return (
        <UserMediumCard user={ acprogrammessage?.student } {...props} />
    )
}