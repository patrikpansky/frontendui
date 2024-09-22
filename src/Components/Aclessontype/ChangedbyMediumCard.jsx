// field changedby
// targeting to User
// going from Aclessontype
import { UserMediumCard } from "../User/UserMediumCard";

export const AclessontypeChangedbyMediumCard = ({ aclessontype , ...props}) => {
    return (
        <UserMediumCard user={ aclessontype?.changedby } {...props} />
    )
}