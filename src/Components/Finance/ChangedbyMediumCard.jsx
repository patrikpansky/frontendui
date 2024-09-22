// field changedby
// targeting to User
// going from Finance
import { UserMediumCard } from "../User/UserMediumCard";

export const FinanceChangedbyMediumCard = ({ finance , ...props}) => {
    return (
        <UserMediumCard user={ finance?.changedby } {...props} />
    )
}