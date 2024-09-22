// field createdby
// targeting to User
// going from Facilitytype
import { UserMediumCard } from "../User/UserMediumCard";

export const FacilitytypeCreatedbyMediumCard = ({ facilitytype , ...props}) => {
    return (
        <UserMediumCard user={ facilitytype?.createdby } {...props} />
    )
}