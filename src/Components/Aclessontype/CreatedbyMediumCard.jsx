// field createdby
// targeting to User
// going from Aclessontype
import { UserMediumCard } from "../User/UserMediumCard";

export const AclessontypeCreatedbyMediumCard = ({ aclessontype , ...props}) => {
    return (
        <UserMediumCard user={ aclessontype?.createdby } {...props} />
    )
}