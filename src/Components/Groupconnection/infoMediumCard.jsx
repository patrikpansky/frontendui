// field pageinfo
// targeting to PageInfo
// going from Groupconnection
import { infoMediumCard } from "../info/infoMediumCard";

export const GroupconnectioninfoMediumCard = ({ groupconnection , ...props}) => {
    return (
        <infoMediumCard pageinfo={ groupconnection?.pageinfo } {...props} />
    )
}