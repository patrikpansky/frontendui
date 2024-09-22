// field changedby
// targeting to User
// going from Acprogram
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramChangedbyMediumCard = ({ acprogram , ...props}) => {
    return (
        <UserMediumCard user={ acprogram?.changedby } {...props} />
    )
}