// field createdby
// targeting to User
// going from Acclassificationtype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcclassificationtypeCreatedbyMediumCard = ({ acclassificationtype , ...props}) => {
    return (
        <UserMediumCard user={ acclassificationtype?.createdby } {...props} />
    )
}