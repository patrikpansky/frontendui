// field createdby
// targeting to User
// going from Acprogramlanguagetype
import { UserMediumCard } from "../User/UserMediumCard";

export const AcprogramlanguagetypeCreatedbyMediumCard = ({ acprogramlanguagetype , ...props}) => {
    return (
        <UserMediumCard user={ acprogramlanguagetype?.createdby } {...props} />
    )
}