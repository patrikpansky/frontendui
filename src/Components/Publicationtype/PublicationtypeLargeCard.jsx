import { PublicationtypeMediumCard } from './PublicationtypeMediumCard';
import { PublicationtypeLargeCardLayout } from './PublicationtypeLargeCardLayout';
import { PublicationtypeVectorLinksCard } from './PublicationtypeVectorLinksCard';

/**/
//  Publicationtype: PublicationType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby publicationtype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby publicationtype


import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ publicationtype?.createdby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ publicationtype?.changedby }/>

/**
 * Entity representing a publication type
 */
export const PublicationtypeLargeCard = ({ publicationtype, children}) => {
    // console.log("PublicationtypeLargeCard", publicationtype)
    return (
        <PublicationtypeLargeCardLayout publicationtype={ publicationtype } grandchildren={children}>
            <PublicationtypeMediumCard publicationtype={ publicationtype }/>
            <PublicationtypeVectorLinksCard  publicationtype={ publicationtype } />
            { 
                publicationtype?.createdby?<MediumCard4 user={ publicationtype?.createdby } label={"Createdby"} />:null
            }
            { 
                publicationtype?.changedby?<MediumCard5 user={ publicationtype?.changedby } label={"Changedby"} />:null
            }
        </PublicationtypeLargeCardLayout>
    )
}

