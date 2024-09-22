// field createdby
// targeting to User
// going from Acsemester
import { UserMediumCard } from "../User/UserMediumCard";

export const AcsemesterCreatedbyMediumCard = ({ acsemester , ...props}) => {
    return (
        <UserMediumCard user={ acsemester?.createdby } {...props} />
    )
}