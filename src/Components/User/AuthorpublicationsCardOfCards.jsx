// field authorpublications
// targeting to PublicationAuthor
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { PublicationauthorsCards } from "../Publicationauthor/PublicationauthorsCards";
import { UserAuthorpublicationsLoadMoreButton as LoadMoreButton} from "../User/AuthorpublicationsLoadMoreButton";

export const UserAuthorpublicationsCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Authorpublications"}>
            <PublicationauthorsCards publicationauthors={ user?.authorpublications } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PublicationauthorsCards>
        </UserCardCapsule>
    )
}