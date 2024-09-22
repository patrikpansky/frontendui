// field externalids
// targeting to ExternalId
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { ExternalidsTable } from "../Externalid/ExternalidsTable";
export const UserExternalidsTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <ExternalidsTable externalids={ user?.externalids } {...props}>
            </ExternalidsTable>
        </UserCardCapsule>
    )
}