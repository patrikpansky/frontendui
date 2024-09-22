// field createdby
// targeting to User
// going from Event
import { UserMediumCard } from "../User/UserMediumCard";

export const EventCreatedbyMediumCard = ({ event , ...props}) => {
    return (
        <UserMediumCard user={ event?.createdby } {...props} />
    )
}