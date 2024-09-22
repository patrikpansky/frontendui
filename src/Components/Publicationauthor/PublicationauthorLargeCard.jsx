import { PublicationauthorMediumCard } from './PublicationauthorMediumCard';
import { PublicationauthorLargeCardLayout } from './PublicationauthorLargeCardLayout';
import { PublicationauthorVectorLinksCard } from './PublicationauthorVectorLinksCard';

/**/
//  Publicationauthor: PublicationAuthor
/**/

//  User: User
// import { User } from '../User/UserMediumCard';
// user publicationauthor

//  Publication: Publication
// import { Publication } from '../Publication/PublicationMediumCard';
// publication publicationauthor


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ publicationauthor?.user }/>
import { PublicationMediumCard as MediumCard6 } from '../Publication/PublicationMediumCard';
// <MediumCard6 publication={ publicationauthor?.publication }/>

/**
 * Entity representing a relation between an user and a publication
 */
export const PublicationauthorLargeCard = ({ publicationauthor, children}) => {
    // console.log("PublicationauthorLargeCard", publicationauthor)
    return (
        <PublicationauthorLargeCardLayout publicationauthor={ publicationauthor } grandchildren={children}>
            <PublicationauthorMediumCard publicationauthor={ publicationauthor }/>
            <PublicationauthorVectorLinksCard  publicationauthor={ publicationauthor } />
            { 
                publicationauthor?.user?<MediumCard5 user={ publicationauthor?.user } label={"User"} />:null
            }
            { 
                publicationauthor?.publication?<MediumCard6 publication={ publicationauthor?.publication } label={"Publication"} />:null
            }
        </PublicationauthorLargeCardLayout>
    )
}

