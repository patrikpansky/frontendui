import { PublicationMediumCard } from './PublicationMediumCard';
import { PublicationLargeCardLayout } from './PublicationLargeCardLayout';
import { PublicationVectorLinksCard } from './PublicationVectorLinksCard';

/**/
//  Publication: Publication
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby publication

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby publication

//  Publicationtype: Publicationtype
// import { Publicationtype } from '../Publicationtype/PublicationtypeMediumCard';
// publicationtype publication


import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ publication?.createdby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ publication?.changedby }/>
import { PublicationtypeMediumCard as MediumCard11 } from '../Publicationtype/PublicationtypeMediumCard';
// <MediumCard11 publicationtype={ publication?.publicationtype }/>

/**
 * Entity representing a publication
 */
export const PublicationLargeCard = ({ publication, children}) => {
    // console.log("PublicationLargeCard", publication)
    return (
        <PublicationLargeCardLayout publication={ publication } grandchildren={children}>
            <PublicationMediumCard publication={ publication }/>
            <PublicationVectorLinksCard  publication={ publication } />
            { 
                publication?.createdby?<MediumCard4 user={ publication?.createdby } label={"Createdby"} />:null
            }
            { 
                publication?.changedby?<MediumCard5 user={ publication?.changedby } label={"Changedby"} />:null
            }
            { 
                publication?.publicationtype?<MediumCard11 publicationtype={ publication?.publicationtype } label={"Publicationtype"} />:null
            }
        </PublicationLargeCardLayout>
    )
}

