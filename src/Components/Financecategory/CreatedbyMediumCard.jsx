// field createdby
// targeting to User
// going from Financecategory
import { UserMediumCard } from "../User/UserMediumCard";

export const FinancecategoryCreatedbyMediumCard = ({ financecategory , ...props}) => {
    return (
        <UserMediumCard user={ financecategory?.createdby } {...props} />
    )
}