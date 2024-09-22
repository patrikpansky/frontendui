import { ExternalidcategoryMediumCard } from './ExternalidcategoryMediumCard';
import { ExternalidcategoryLargeCardLayout } from './ExternalidcategoryLargeCardLayout';
import { ExternalidcategoryVectorLinksCard } from './ExternalidcategoryVectorLinksCard';

/**/
//  Externalidcategory: ExternalIdCategory
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby externalidcategory

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby externalidcategory


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ externalidcategory?.changedby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ externalidcategory?.createdby }/>

/**
 * Entity representing an external category id ()
 */
export const ExternalidcategoryLargeCard = ({ externalidcategory, children}) => {
    // console.log("ExternalidcategoryLargeCard", externalidcategory)
    return (
        <ExternalidcategoryLargeCardLayout externalidcategory={ externalidcategory } grandchildren={children}>
            <ExternalidcategoryMediumCard externalidcategory={ externalidcategory }/>
            <ExternalidcategoryVectorLinksCard  externalidcategory={ externalidcategory } />
            { 
                externalidcategory?.changedby?<MediumCard5 user={ externalidcategory?.changedby } label={"Changedby"} />:null
            }
            { 
                externalidcategory?.createdby?<MediumCard6 user={ externalidcategory?.createdby } label={"Createdby"} />:null
            }
        </ExternalidcategoryLargeCardLayout>
    )
}

