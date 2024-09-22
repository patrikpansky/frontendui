// field createdby
// targeting to User
// going from Acprogramtype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramtypeCreatedbyMediumCard = ({ acprogramtype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramtype?.createdby } {...props} />
    )
}