// field changedby
// targeting to User
// going from Form
import { UserMediumCard } from "../User/UserMediumCard";

export const FormChangedbyMediumCard = ({ form , ...props}) => {
    return (
        <UserMediumCard user={ form?.changedby } {...props} />
    )
}