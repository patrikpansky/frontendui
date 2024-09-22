import { ExternalidMediumCard } from './ExternalidMediumCard';
import { ExternalidLargeCardLayout } from './ExternalidLargeCardLayout';
import { ExternalidVectorLinksCard } from './ExternalidVectorLinksCard';

/**/
//  Externalid: ExternalId
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby externalid

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby externalid

//  Type: Externalidtype
// import { Externalidtype } from '../Externalidtype/ExternalidtypeMediumCard';
// type externalid


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ externalid?.changedby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ externalid?.createdby }/>
import { ExternalidtypeMediumCard as MediumCard7 } from '../Externalidtype/ExternalidtypeMediumCard';
// <MediumCard7 externalidtype={ externalid?.type }/>

/**
 * Entity representing an external type id (like SCOPUS identification / id)
 */
export const ExternalidLargeCard = ({ externalid, children}) => {
    // console.log("ExternalidLargeCard", externalid)
    return (
        <ExternalidLargeCardLayout externalid={ externalid } grandchildren={children}>
            <ExternalidMediumCard externalid={ externalid }/>
            <ExternalidVectorLinksCard  externalid={ externalid } />
            { 
                externalid?.changedby?<MediumCard3 user={ externalid?.changedby } label={"Changedby"} />:null
            }
            { 
                externalid?.createdby?<MediumCard4 user={ externalid?.createdby } label={"Createdby"} />:null
            }
            { 
                externalid?.type?<MediumCard7 externalidtype={ externalid?.type } label={"Type"} />:null
            }
        </ExternalidLargeCardLayout>
    )
}

