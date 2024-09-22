// field publicationtype
// targeting to PublicationType
// going from Publication
import { PublicationtypeMediumCard } from "../Publicationtype/PublicationtypeMediumCard";

export const PublicationPublicationtypeMediumCard = ({ publication , ...props}) => {
    return (
        <PublicationtypeMediumCard publicationtype={ publication?.publicationtype } {...props} />
    )
}