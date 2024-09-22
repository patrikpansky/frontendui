// field licencedgroup
// targeting to Group
// going from Acprogram
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const AcprogramLicencedgroupMediumCard = ({ acprogram , ...props}) => {
    return (
        <GroupMediumCard group={ acprogram?.licencedgroup } {...props} />
    )
}