import { RoletypelistMediumCard } from './RoletypelistMediumCard';
import { RoletypelistLargeCardLayout } from './RoletypelistLargeCardLayout';
import { RoletypelistVectorLinksCard } from './RoletypelistVectorLinksCard';

/**/
//  Roletypelist: RoleTypeList
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby roletypelist

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby roletypelist


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ roletypelist?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ roletypelist?.changedby }/>

/**
 * 
 */
export const RoletypelistLargeCard = ({ roletypelist, children}) => {
    // console.log("RoletypelistLargeCard", roletypelist)
    return (
        <RoletypelistLargeCardLayout roletypelist={ roletypelist } grandchildren={children}>
            <RoletypelistMediumCard roletypelist={ roletypelist }/>
            <RoletypelistVectorLinksCard  roletypelist={ roletypelist } />
            { 
                roletypelist?.createdby?<MediumCard1 user={ roletypelist?.createdby } label={"Createdby"} />:null
            }
            { 
                roletypelist?.changedby?<MediumCard4 user={ roletypelist?.changedby } label={"Changedby"} />:null
            }
        </RoletypelistLargeCardLayout>
    )
}

