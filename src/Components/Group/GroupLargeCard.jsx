import { GroupMediumCard } from './GroupMediumCard';
import { GroupLargeCardLayout } from './GroupLargeCardLayout';
import { GroupVectorLinksCard } from './GroupVectorLinksCard';

/**/
//  Group: Group
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby group

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby group

//  Grouptype: Grouptype
// import { Grouptype } from '../Grouptype/GrouptypeMediumCard';
// grouptype group

//  Type: Grouptype
// import { Grouptype } from '../Grouptype/GrouptypeMediumCard';
// type group

//  Mastergroup: Group
// import { Group } from '../Group/GroupMediumCard';
// mastergroup group

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject group


import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ group?.createdby }/>
import { UserMediumCard as MediumCard7 } from '../User/UserMediumCard';
// <MediumCard7 user={ group?.changedby }/>
import { GrouptypeMediumCard as MediumCard13 } from '../Grouptype/GrouptypeMediumCard';
// <MediumCard13 grouptype={ group?.grouptype }/>
import { GrouptypeMediumCard as MediumCard14 } from '../Grouptype/GrouptypeMediumCard';
// <MediumCard14 grouptype={ group?.type }/>
import { GroupMediumCard as MediumCard17 } from '../Group/GroupMediumCard';
// <MediumCard17 group={ group?.mastergroup }/>
import { RbacobjectMediumCard as MediumCard20 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard20 rbacobject={ group?.rbacobject }/>

/**
 * Entity representing a group
 */
export const GroupLargeCard = ({ group, children}) => {
    // console.log("GroupLargeCard", group)
    return (
        <GroupLargeCardLayout group={ group } grandchildren={children}>
            <GroupMediumCard group={ group }/>
            <GroupVectorLinksCard  group={ group } />
            { 
                group?.createdby?<MediumCard4 user={ group?.createdby } label={"Createdby"} />:null
            }
            { 
                group?.changedby?<MediumCard7 user={ group?.changedby } label={"Changedby"} />:null
            }
            { 
                group?.grouptype?<MediumCard13 grouptype={ group?.grouptype } label={"Grouptype"} />:null
            }
            { 
                group?.type?<MediumCard14 grouptype={ group?.type } label={"Type"} />:null
            }
            { 
                group?.mastergroup?<MediumCard17 group={ group?.mastergroup } label={"Mastergroup"} />:null
            }
            { 
                group?.rbacobject?<MediumCard20 rbacobject={ group?.rbacobject } label={"Rbacobject"} />:null
            }
        </GroupLargeCardLayout>
    )
}

