// field createdby
// targeting to User
// going from Roletypelist
import { UserMediumCard } from "../User/UserMediumCard";

export const RoletypelistCreatedbyMediumCard = ({ roletypelist , ...props}) => {
    return (
        <UserMediumCard user={ roletypelist?.createdby } {...props} />
    )
}