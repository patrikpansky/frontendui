import { GroupconnectionMediumCard } from './GroupconnectionMediumCard';
import { GroupconnectionLargeCardLayout } from './GroupconnectionLargeCardLayout';
import { GroupconnectionVectorLinksCard } from './GroupconnectionVectorLinksCard';

/**/
//  Groupconnection: GroupConnection
/**/

//  info: info
// import { info } from '../info/infoMediumCard';
// pageinfo groupconnection


import { infoMediumCard as MediumCard0 } from '../info/infoMediumCard';
// <MediumCard0 pageinfo={ groupconnection?.pageinfo }/>

/**
 * 
 */
export const GroupconnectionLargeCard = ({ groupconnection, children}) => {
    // console.log("GroupconnectionLargeCard", groupconnection)
    return (
        <GroupconnectionLargeCardLayout groupconnection={ groupconnection } grandchildren={children}>
            <GroupconnectionMediumCard groupconnection={ groupconnection }/>
            <GroupconnectionVectorLinksCard  groupconnection={ groupconnection } />
            { 
                groupconnection?.pageinfo?<MediumCard0 pageinfo={ groupconnection?.pageinfo } label={"info"} />:null
            }
        </GroupconnectionLargeCardLayout>
    )
}

