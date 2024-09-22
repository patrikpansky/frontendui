// field answers
// targeting to Answer
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { AnswersCards } from "../Answer/AnswersCards";
import { UserAnswersLoadMoreButton as LoadMoreButton} from "../User/AnswersLoadMoreButton";

export const UserAnswersCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Answers"}>
            <AnswersCards answers={ user?.answers } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AnswersCards>
        </UserCardCapsule>
    )
}