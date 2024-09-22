// field presencetype
// targeting to PresenceType
// going from Presence
import { PresencetypeMediumCard } from "../Presencetype/PresencetypeMediumCard";

export const PresencePresencetypeMediumCard = ({ presence , ...props}) => {
    return (
        <PresencetypeMediumCard presencetype={ presence?.presencetype } {...props} />
    )
}