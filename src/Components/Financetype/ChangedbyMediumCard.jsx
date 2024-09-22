// field changedby
// targeting to User
// going from Financetype
import { UserMediumCard } from "../User/UserMediumCard";

export const FinancetypeChangedbyMediumCard = ({ financetype , ...props}) => {
    return (
        <UserMediumCard user={ financetype?.changedby } {...props} />
    )
}