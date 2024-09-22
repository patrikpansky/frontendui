// field createdby
// targeting to User
// going from Form
import { UserMediumCard } from "../User/UserMediumCard";

export const FormCreatedbyMediumCard = ({ form , ...props}) => {
    return (
        <UserMediumCard user={ form?.createdby } {...props} />
    )
}