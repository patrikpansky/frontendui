import { GroupRolesCard } from "../../Group"

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