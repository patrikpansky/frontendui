// field createdby
// targeting to User
// going from Finance
import { UserMediumCard } from "../User/UserMediumCard";

export const FinanceCreatedbyMediumCard = ({ finance , ...props}) => {
    return (
        <UserMediumCard user={ finance?.createdby } {...props} />
    )
}