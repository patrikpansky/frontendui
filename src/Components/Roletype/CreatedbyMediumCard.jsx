// field createdby
// targeting to User
// going from Roletype
import { UserMediumCard } from "../User/UserMediumCard";

export const RoletypeCreatedbyMediumCard = ({ roletype , ...props}) => {
    return (
        <UserMediumCard user={ roletype?.createdby } {...props} />
    )
}