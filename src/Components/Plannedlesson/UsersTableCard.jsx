// field users
// targeting to User
// going from Plannedlesson
import { PlannedlessonCardCapsule } from "./PlannedlessonCardCapsule";
import { UsersTable } from "../User/UsersTable";
export const PlannedlessonUsersTableCard = ({ plannedlesson , ...props}) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } >
            <UsersTable users={ plannedlesson?.users } {...props}>
            </UsersTable>
        </PlannedlessonCardCapsule>
    )
}