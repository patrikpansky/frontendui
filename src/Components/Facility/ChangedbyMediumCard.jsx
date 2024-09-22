// field changedby
// targeting to User
// going from Facility
import { UserMediumCard } from "../User/UserMediumCard";

export const FacilityChangedbyMediumCard = ({ facility , ...props}) => {
    return (
        <UserMediumCard user={ facility?.changedby } {...props} />
    )
}