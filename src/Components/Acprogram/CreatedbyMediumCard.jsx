// field createdby
// targeting to User
// going from Acprogram
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramCreatedbyMediumCard = ({ acprogram , ...props}) => {
    return (
        <UserMediumCard user={ acprogram?.createdby } {...props} />
    )
}