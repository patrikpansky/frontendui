// field createdby
// targeting to User
// going from Projecttype
import { UserMediumCard } from "../User/UserMediumCard";

export const ProjecttypeCreatedbyMediumCard = ({ projecttype , ...props}) => {
    return (
        <UserMediumCard user={ projecttype?.createdby } {...props} />
    )
}