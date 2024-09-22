// field changedby
// targeting to User
// going from Financecategory
import { UserMediumCard } from "../User/UserMediumCard";

export const FinancecategoryChangedbyMediumCard = ({ financecategory , ...props}) => {
    return (
        <UserMediumCard user={ financecategory?.changedby } {...props} />
    )
}