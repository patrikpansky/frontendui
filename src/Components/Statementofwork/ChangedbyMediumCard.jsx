// field changedby
// targeting to User
// going from Statementofwork
import { UserMediumCard } from "../User/UserMediumCard";

export const StatementofworkChangedbyMediumCard = ({ statementofwork , ...props}) => {
    return (
        <UserMediumCard user={ statementofwork?.changedby } {...props} />
    )
}