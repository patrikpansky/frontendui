// field changedby
// targeting to User
// going from Acsemester
import { UserMediumCard } from "../User/UserMediumCard";

export const AcsemesterChangedbyMediumCard = ({ acsemester , ...props}) => {
    return (
        <UserMediumCard user={ acsemester?.changedby } {...props} />
    )
}