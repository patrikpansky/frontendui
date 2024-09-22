import { UserconnectionedgeMediumCard } from './UserconnectionedgeMediumCard';
import { UserconnectionedgeLargeCardLayout } from './UserconnectionedgeLargeCardLayout';
import { UserconnectionedgeVectorLinksCard } from './UserconnectionedgeVectorLinksCard';

/**/
//  Userconnectionedge: UserConnectionEdge
/**/

//  Node: User
// import { User } from '../User/UserMediumCard';
// node userconnectionedge


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ userconnectionedge?.node }/>

/**
 * 
 */
export const UserconnectionedgeLargeCard = ({ userconnectionedge, children}) => {
    // console.log("UserconnectionedgeLargeCard", userconnectionedge)
    return (
        <UserconnectionedgeLargeCardLayout userconnectionedge={ userconnectionedge } grandchildren={children}>
            <UserconnectionedgeMediumCard userconnectionedge={ userconnectionedge }/>
            <UserconnectionedgeVectorLinksCard  userconnectionedge={ userconnectionedge } />
            { 
                userconnectionedge?.node?<MediumCard1 user={ userconnectionedge?.node } label={"Node"} />:null
            }
        </UserconnectionedgeLargeCardLayout>
    )
}

