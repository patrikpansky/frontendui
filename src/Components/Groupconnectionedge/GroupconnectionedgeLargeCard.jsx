import { GroupconnectionedgeMediumCard } from './GroupconnectionedgeMediumCard';
import { GroupconnectionedgeLargeCardLayout } from './GroupconnectionedgeLargeCardLayout';
import { GroupconnectionedgeVectorLinksCard } from './GroupconnectionedgeVectorLinksCard';

/**/
//  Groupconnectionedge: GroupConnectionEdge
/**/

//  Node: Group
// import { Group } from '../Group/GroupMediumCard';
// node groupconnectionedge


import { GroupMediumCard as MediumCard1 } from '../Group/GroupMediumCard';
// <MediumCard1 group={ groupconnectionedge?.node }/>

/**
 * 
 */
export const GroupconnectionedgeLargeCard = ({ groupconnectionedge, children}) => {
    // console.log("GroupconnectionedgeLargeCard", groupconnectionedge)
    return (
        <GroupconnectionedgeLargeCardLayout groupconnectionedge={ groupconnectionedge } grandchildren={children}>
            <GroupconnectionedgeMediumCard groupconnectionedge={ groupconnectionedge }/>
            <GroupconnectionedgeVectorLinksCard  groupconnectionedge={ groupconnectionedge } />
            { 
                groupconnectionedge?.node?<MediumCard1 group={ groupconnectionedge?.node } label={"Node"} />:null
            }
        </GroupconnectionedgeLargeCardLayout>
    )
}

