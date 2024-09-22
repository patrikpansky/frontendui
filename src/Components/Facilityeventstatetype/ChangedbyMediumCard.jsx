// field changedby
// targeting to User
// going from Facilityeventstatetype
import { UserMediumCard } from "../User/UserMediumCard";

export const FacilityeventstatetypeChangedbyMediumCard = ({ facilityeventstatetype , ...props}) => {
    return (
        <UserMediumCard user={ facilityeventstatetype?.changedby } {...props} />
    )
}