// field request
// targeting to Request
// going from Requesthistory
import { RequestMediumCard } from "../Request/RequestMediumCard";

export const RequesthistoryRequestMediumCard = ({ requesthistory , ...props}) => {
    return (
        <RequestMediumCard request={ requesthistory?.request } {...props} />
    )
}