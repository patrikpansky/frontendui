// field createdby
// targeting to User
// going from Rolecategory
import { UserMediumCard } from "../User/UserMediumCard";

export const RolecategoryCreatedbyMediumCard = ({ rolecategory , ...props}) => {
    return (
        <UserMediumCard user={ rolecategory?.createdby } {...props} />
    )
}