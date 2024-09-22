// field createdby
// targeting to User
// going from Facility
import { UserMediumCard } from "../User/UserMediumCard";

export const FacilityCreatedbyMediumCard = ({ facility , ...props}) => {
    return (
        <UserMediumCard user={ facility?.createdby } {...props} />
    )
}