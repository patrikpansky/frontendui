// field createdby
// targeting to User
// going from Acclassification
import { UserMediumCard } from "../User/UserMediumCard";

export const AcclassificationCreatedbyMediumCard = ({ acclassification , ...props}) => {
    return (
        <UserMediumCard user={ acclassification?.createdby } {...props} />
    )
}