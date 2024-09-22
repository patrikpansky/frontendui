// field grants
// targeting to Group
// going from Acsubject
import { GroupMediumCard } from "../Group/GroupMediumCard";

export const AcsubjectGrantsMediumCard = ({ acsubject , ...props}) => {
    return (
        <GroupMediumCard group={ acsubject?.grants } {...props} />
    )
}