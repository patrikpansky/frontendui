// field student
// targeting to User
// going from Acprogramstudent
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramstudentStudentMediumCard = ({ acprogramstudent , ...props}) => {
    return (
        <UserMediumCard user={ acprogramstudent?.student } {...props} />
    )
}