// field changedby
// targeting to User
// going from Formsection
import { UserMediumCard } from "../User/UserMediumCard";

export const FormsectionChangedbyMediumCard = ({ formsection , ...props}) => {
    return (
        <UserMediumCard user={ formsection?.changedby } {...props} />
    )
}