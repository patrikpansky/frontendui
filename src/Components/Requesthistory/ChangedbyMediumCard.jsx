// field changedby
// targeting to User
// going from Requesthistory
import { UserMediumCard } from "../User/UserMediumCard";

export const RequesthistoryChangedbyMediumCard = ({ requesthistory , ...props}) => {
    return (
        <UserMediumCard user={ requesthistory?.changedby } {...props} />
    )
}