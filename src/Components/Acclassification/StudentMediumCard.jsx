// field student
// targeting to User
// going from Acclassification
import { UserMediumCard } from "../User/UserMediumCard";

export const AcclassificationStudentMediumCard = ({ acclassification , ...props}) => {
    return (
        <UserMediumCard user={ acclassification?.student } {...props} />
    )
}