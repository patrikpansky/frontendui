// field classifications
// targeting to AcClassification
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { AcclassificationsTable } from "../Acclassification/AcclassificationsTable";
export const UserClassificationsTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <AcclassificationsTable acclassifications={ user?.classifications } {...props}>
            </AcclassificationsTable>
        </UserCardCapsule>
    )
}