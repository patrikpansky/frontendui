// field answers
// targeting to Answer
// going from User
import { AnswersTable } from "../Answer/AnswersTable";
import { AnswerLoadMoreButton } from "../Answer/AnswerLoadMoreButton";

export const UserAnswersTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AnswersTable answer={ user?.answers } {...props}>
            <AnswerLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </AnswersTable>
    )
}