// field createdby
// targeting to User
// going from Acprogramstudent
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramstudentCreatedbyMediumCard = ({ acprogramstudent , ...props}) => {
    return (
        <UserMediumCard user={ acprogramstudent?.createdby } {...props} />
    )
}