// field studies
// targeting to AcProgramStudent
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { AcprogramstudentsCards } from "../Acprogramstudent/AcprogramstudentsCards";
import { UserStudiesLoadMoreButton as LoadMoreButton} from "../User/StudiesLoadMoreButton";

export const UserStudiesCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Studies"}>
            <AcprogramstudentsCards acprogramstudents={ user?.studies } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AcprogramstudentsCards>
        </UserCardCapsule>
    )
}