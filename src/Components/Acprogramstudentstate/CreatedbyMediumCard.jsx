// field createdby
// targeting to User
// going from Acprogramstudentstate
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramstudentstateCreatedbyMediumCard = ({ acprogramstudentstate , ...props}) => {
    return (
        <UserMediumCard user={ acprogramstudentstate?.createdby } {...props} />
    )
}