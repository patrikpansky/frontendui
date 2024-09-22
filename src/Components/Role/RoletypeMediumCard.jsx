// field roletype
// targeting to RoleType
// going from Role
import { RoletypeMediumCard } from "../Roletype/RoletypeMediumCard";

export const RoleRoletypeMediumCard = ({ role , ...props}) => {
    return (
        <RoletypeMediumCard roletype={ role?.roletype } {...props} />
    )
}