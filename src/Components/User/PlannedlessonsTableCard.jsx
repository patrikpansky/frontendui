// field plannedlessons
// targeting to PlannedLesson
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
export const UserPlannedlessonsTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <PlannedlessonsTable plannedlessons={ user?.plannedlessons } {...props}>
            </PlannedlessonsTable>
        </UserCardCapsule>
    )
}