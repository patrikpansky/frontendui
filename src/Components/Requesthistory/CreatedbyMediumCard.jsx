// field createdby
// targeting to User
// going from Requesthistory
import { UserMediumCard } from "../User/UserMediumCard";

export const RequesthistoryCreatedbyMediumCard = ({ requesthistory , ...props}) => {
    return (
        <UserMediumCard user={ requesthistory?.createdby } {...props} />
    )
}