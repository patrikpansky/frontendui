// field creator
// targeting to User
// going from Request
import { UserMediumCard } from "../User/UserMediumCard";

export const RequestCreatorMediumCard = ({ request , ...props}) => {
    return (
        <UserMediumCard user={ request?.creator } {...props} />
    )
}