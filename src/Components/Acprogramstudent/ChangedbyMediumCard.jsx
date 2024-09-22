// field changedby
// targeting to User
// going from Acprogramstudent
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramstudentChangedbyMediumCard = ({ acprogramstudent , ...props}) => {
    return (
        <UserMediumCard user={ acprogramstudent?.changedby } {...props} />
    )
}