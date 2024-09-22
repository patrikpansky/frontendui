// field presences
// targeting to Presence
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { PresencesTable } from "../Presence/PresencesTable";
export const UserPresencesTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <PresencesTable presences={ user?.presences } {...props}>
            </PresencesTable>
        </UserCardCapsule>
    )
}