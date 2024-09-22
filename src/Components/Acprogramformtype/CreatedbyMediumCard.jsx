// field createdby
// targeting to User
// going from Acprogramformtype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramformtypeCreatedbyMediumCard = ({ acprogramformtype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramformtype?.createdby } {...props} />
    )
}