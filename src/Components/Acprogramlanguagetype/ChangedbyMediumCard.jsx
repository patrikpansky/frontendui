// field changedby
// targeting to User
// going from Acprogramlanguagetype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramlanguagetypeChangedbyMediumCard = ({ acprogramlanguagetype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramlanguagetype?.changedby } {...props} />
    )
}