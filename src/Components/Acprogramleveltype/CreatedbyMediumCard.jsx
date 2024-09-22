// field createdby
// targeting to User
// going from Acprogramleveltype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramleveltypeCreatedbyMediumCard = ({ acprogramleveltype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramleveltype?.createdby } {...props} />
    )
}