import { AcprogramMediumCard } from './AcprogramMediumCard';
import { AcprogramLargeCardLayout } from './AcprogramLargeCardLayout';
import { AcprogramVectorLinksCard } from './AcprogramVectorLinksCard';

/**/
//  Acprogram: AcProgram
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acprogram

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acprogram

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject acprogram

//  Type: Acprogramtype
// import { Acprogramtype } from '../Acprogramtype/AcprogramtypeMediumCard';
// type acprogram

//  Grantsgroup: Group
// import { Group } from '../Group/GroupMediumCard';
// grantsgroup acprogram

//  Licencedgroup: Group
// import { Group } from '../Group/GroupMediumCard';
// licencedgroup acprogram


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acprogram?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acprogram?.changedby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ acprogram?.rbacobject }/>
import { AcprogramtypeMediumCard as MediumCard8 } from '../Acprogramtype/AcprogramtypeMediumCard';
// <MediumCard8 acprogramtype={ acprogram?.type }/>
import { GroupMediumCard as MediumCard11 } from '../Group/GroupMediumCard';
// <MediumCard11 group={ acprogram?.grantsgroup }/>
import { GroupMediumCard as MediumCard12 } from '../Group/GroupMediumCard';
// <MediumCard12 group={ acprogram?.licencedgroup }/>

/**
 * Entity representing acredited study programs
 */
export const AcprogramLargeCard = ({ acprogram, children}) => {
    // console.log("AcprogramLargeCard", acprogram)
    return (
        <AcprogramLargeCardLayout acprogram={ acprogram } grandchildren={children}>
            <AcprogramMediumCard acprogram={ acprogram }/>
            <AcprogramVectorLinksCard  acprogram={ acprogram } />
            { 
                acprogram?.createdby?<MediumCard3 user={ acprogram?.createdby } label={"Createdby"} />:null
            }
            { 
                acprogram?.changedby?<MediumCard4 user={ acprogram?.changedby } label={"Changedby"} />:null
            }
            { 
                acprogram?.rbacobject?<MediumCard7 rbacobject={ acprogram?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                acprogram?.type?<MediumCard8 acprogramtype={ acprogram?.type } label={"Type"} />:null
            }
            { 
                acprogram?.grantsgroup?<MediumCard11 group={ acprogram?.grantsgroup } label={"Grantsgroup"} />:null
            }
            { 
                acprogram?.licencedgroup?<MediumCard12 group={ acprogram?.licencedgroup } label={"Licencedgroup"} />:null
            }
        </AcprogramLargeCardLayout>
    )
}

