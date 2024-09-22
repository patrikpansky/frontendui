// field publication
// targeting to Publication
// going from Publicationauthor
import { PublicationMediumCard } from "../Publication/PublicationMediumCard";

export const PublicationauthorPublicationMediumCard = ({ publicationauthor , ...props}) => {
    return (
        <PublicationMediumCard publication={ publicationauthor?.publication } {...props} />
    )
}