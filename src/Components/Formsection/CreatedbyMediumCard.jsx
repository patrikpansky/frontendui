// field createdby
// targeting to User
// going from Formsection
import { UserMediumCard } from "../User/UserMediumCard";

export const FormsectionCreatedbyMediumCard = ({ formsection , ...props}) => {
    return (
        <UserMediumCard user={ formsection?.createdby } {...props} />
    )
}