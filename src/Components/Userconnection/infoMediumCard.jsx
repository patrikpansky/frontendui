// field pageinfo
// targeting to PageInfo
// going from Userconnection
import { infoMediumCard } from "../info/infoMediumCard";

export const UserconnectioninfoMediumCard = ({ userconnection , ...props}) => {
    return (
        <infoMediumCard pageinfo={ userconnection?.pageinfo } {...props} />
    )
}