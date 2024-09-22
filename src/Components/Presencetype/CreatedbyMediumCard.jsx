// field createdby
// targeting to User
// going from Presencetype
import { UserMediumCard } from "../User/UserMediumCard";

export const PresencetypeCreatedbyMediumCard = ({ presencetype , ...props}) => {
    return (
        <UserMediumCard user={ presencetype?.createdby } {...props} />
    )
}