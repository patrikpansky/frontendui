// field answers
// targeting to Answer
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { AnswersTable } from "../Answer/AnswersTable";
export const UserAnswersTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <AnswersTable answers={ user?.answers } {...props}>
            </AnswersTable>
        </UserCardCapsule>
    )
}