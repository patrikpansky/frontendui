// field createdby
// targeting to User
// going from Eventtype
import { UserMediumCard } from "../User/UserMediumCard";

export const EventtypeCreatedbyMediumCard = ({ eventtype , ...props}) => {
    return (
        <UserMediumCard user={ eventtype?.createdby } {...props} />
    )
}