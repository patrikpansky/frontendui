// field userid
// targeting to User
// going from Financecategory
import { UserMediumCard } from "../User/UserMediumCard";

export const FinancecategoryUseridMediumCard = ({ financecategory , ...props}) => {
    return (
        <UserMediumCard user={ financecategory?.userid } {...props} />
    )
}