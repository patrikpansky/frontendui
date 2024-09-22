import { UserconnectionMediumCard } from './UserconnectionMediumCard';
import { UserconnectionLargeCardLayout } from './UserconnectionLargeCardLayout';
import { UserconnectionVectorLinksCard } from './UserconnectionVectorLinksCard';

/**/
//  Userconnection: UserConnection
/**/

//  info: info
// import { info } from '../info/infoMediumCard';
// pageinfo userconnection


import { infoMediumCard as MediumCard0 } from '../info/infoMediumCard';
// <MediumCard0 pageinfo={ userconnection?.pageinfo }/>

/**
 * 
 */
export const UserconnectionLargeCard = ({ userconnection, children}) => {
    // console.log("UserconnectionLargeCard", userconnection)
    return (
        <UserconnectionLargeCardLayout userconnection={ userconnection } grandchildren={children}>
            <UserconnectionMediumCard userconnection={ userconnection }/>
            <UserconnectionVectorLinksCard  userconnection={ userconnection } />
            { 
                userconnection?.pageinfo?<MediumCard0 pageinfo={ userconnection?.pageinfo } label={"info"} />:null
            }
        </UserconnectionLargeCardLayout>
    )
}

