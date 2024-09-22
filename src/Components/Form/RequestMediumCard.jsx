// field request
// targeting to Request
// going from Form
import { RequestMediumCard } from "../Request/RequestMediumCard";

export const FormRequestMediumCard = ({ form , ...props}) => {
    return (
        <RequestMediumCard request={ form?.request } {...props} />
    )
}