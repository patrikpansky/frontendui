// field changedby
// targeting to User
// going from Facilitytype
import { UserMediumCard } from "../User/UserMediumCard";

export const FacilitytypeChangedbyMediumCard = ({ facilitytype , ...props}) => {
    return (
        <UserMediumCard user={ facilitytype?.changedby } {...props} />
    )
}