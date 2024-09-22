// field type
// targeting to ExternalIdType
// going from Externalid
import { ExternalidtypeMediumCard } from "../Externalidtype/ExternalidtypeMediumCard";

export const ExternalidTypeMediumCard = ({ externalid , ...props}) => {
    return (
        <ExternalidtypeMediumCard externalidtype={ externalid?.type } {...props} />
    )
}