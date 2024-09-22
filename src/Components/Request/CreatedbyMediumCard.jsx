// field createdby
// targeting to User
// going from Request
import { UserMediumCard } from "../User/UserMediumCard";

export const RequestCreatedbyMediumCard = ({ request , ...props}) => {
    return (
        <UserMediumCard user={ request?.createdby } {...props} />
    )
}