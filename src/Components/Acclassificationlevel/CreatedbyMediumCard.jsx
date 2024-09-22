// field createdby
// targeting to User
// going from Acclassificationlevel
import { UserMediumCard } from "../User/UserMediumCard";

export const AcclassificationlevelCreatedbyMediumCard = ({ acclassificationlevel , ...props}) => {
    return (
        <UserMediumCard user={ acclassificationlevel?.createdby } {...props} />
    )
}