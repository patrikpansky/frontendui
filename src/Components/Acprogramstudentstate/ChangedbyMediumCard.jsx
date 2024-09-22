// field changedby
// targeting to User
// going from Acprogramstudentstate
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramstudentstateChangedbyMediumCard = ({ acprogramstudentstate , ...props}) => {
    return (
        <UserMediumCard user={ acprogramstudentstate?.changedby } {...props} />
    )
}