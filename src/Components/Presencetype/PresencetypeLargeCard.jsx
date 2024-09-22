import { PresencetypeMediumCard } from './PresencetypeMediumCard';
import { PresencetypeLargeCardLayout } from './PresencetypeLargeCardLayout';
import { PresencetypeVectorLinksCard } from './PresencetypeVectorLinksCard';

/**/
//  Presencetype: PresenceType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby presencetype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby presencetype


import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ presencetype?.createdby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ presencetype?.changedby }/>

/**
 * Represents a type of presence (like Present)
 */
export const PresencetypeLargeCard = ({ presencetype, children}) => {
    // console.log("PresencetypeLargeCard", presencetype)
    return (
        <PresencetypeLargeCardLayout presencetype={ presencetype } grandchildren={children}>
            <PresencetypeMediumCard presencetype={ presencetype }/>
            <PresencetypeVectorLinksCard  presencetype={ presencetype } />
            { 
                presencetype?.createdby?<MediumCard5 user={ presencetype?.createdby } label={"Createdby"} />:null
            }
            { 
                presencetype?.changedby?<MediumCard6 user={ presencetype?.changedby } label={"Changedby"} />:null
            }
        </PresencetypeLargeCardLayout>
    )
}

