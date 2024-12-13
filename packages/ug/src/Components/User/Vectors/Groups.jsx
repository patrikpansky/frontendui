import { GroupMediumCard } from "../../Group/GroupMediumCard"
import { GroupRolesCard } from "../../Group/GroupRolesCard"

export const UserGroups = ({user}) => {
    const groups = user?.groups || []
    return (
        <>
            {groups.map(
                group => <GroupRolesCard key={group.id} group={group} />
            )}
        </>
    )
}