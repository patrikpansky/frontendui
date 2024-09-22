// field createdby
// targeting to User
// going from Facilityeventstatetype
import { UserMediumCard } from "../User/UserMediumCard";

export const FacilityeventstatetypeCreatedbyMediumCard = ({ facilityeventstatetype , ...props}) => {
    return (
        <UserMediumCard user={ facilityeventstatetype?.createdby } {...props} />
    )
}