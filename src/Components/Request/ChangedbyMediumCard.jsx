// field changedby
// targeting to User
// going from Request
import { UserMediumCard } from "../User/UserMediumCard";

export const RequestChangedbyMediumCard = ({ request , ...props}) => {
    return (
        <UserMediumCard user={ request?.changedby } {...props} />
    )
}