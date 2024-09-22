// field createdby
// targeting to User
// going from Statementofwork
import { UserMediumCard } from "../User/UserMediumCard";

export const StatementofworkCreatedbyMediumCard = ({ statementofwork , ...props}) => {
    return (
        <UserMediumCard user={ statementofwork?.createdby } {...props} />
    )
}