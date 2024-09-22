import { ExternalidtypeMediumCard } from './ExternalidtypeMediumCard';
import { ExternalidtypeLargeCardLayout } from './ExternalidtypeLargeCardLayout';
import { ExternalidtypeVectorLinksCard } from './ExternalidtypeVectorLinksCard';

/**/
//  Externalidtype: ExternalIdType
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby externalidtype

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby externalidtype

//  Category: Externalidcategory
// import { Externalidcategory } from '../Externalidcategory/ExternalidcategoryMediumCard';
// category externalidtype


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ externalidtype?.changedby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ externalidtype?.createdby }/>
import { ExternalidcategoryMediumCard as MediumCard7 } from '../Externalidcategory/ExternalidcategoryMediumCard';
// <MediumCard7 externalidcategory={ externalidtype?.category }/>

/**
 * Entity representing an external type id (like SCOPUS identification / id)
 */
export const ExternalidtypeLargeCard = ({ externalidtype, children}) => {
    // console.log("ExternalidtypeLargeCard", externalidtype)
    return (
        <ExternalidtypeLargeCardLayout externalidtype={ externalidtype } grandchildren={children}>
            <ExternalidtypeMediumCard externalidtype={ externalidtype }/>
            <ExternalidtypeVectorLinksCard  externalidtype={ externalidtype } />
            { 
                externalidtype?.changedby?<MediumCard5 user={ externalidtype?.changedby } label={"Changedby"} />:null
            }
            { 
                externalidtype?.createdby?<MediumCard6 user={ externalidtype?.createdby } label={"Createdby"} />:null
            }
            { 
                externalidtype?.category?<MediumCard7 externalidcategory={ externalidtype?.category } label={"Category"} />:null
            }
        </ExternalidtypeLargeCardLayout>
    )
}

