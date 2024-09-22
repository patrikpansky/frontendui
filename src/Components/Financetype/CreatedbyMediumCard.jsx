// field createdby
// targeting to User
// going from Financetype
import { UserMediumCard } from "../User/UserMediumCard";

export const FinancetypeCreatedbyMediumCard = ({ financetype , ...props}) => {
    return (
        <UserMediumCard user={ financetype?.createdby } {...props} />
    )
}