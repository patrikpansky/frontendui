import { AcprogramleveltypeMediumCard } from './AcprogramleveltypeMediumCard';
import { AcprogramleveltypeLargeCardLayout } from './AcprogramleveltypeLargeCardLayout';
import { AcprogramleveltypeVectorLinksCard } from './AcprogramleveltypeVectorLinksCard';

/**/
//  Acprogramleveltype: AcProgramLevelType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acprogramleveltype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acprogramleveltype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acprogramleveltype?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acprogramleveltype?.changedby }/>

/**
 * bachelor, ...
 */
export const AcprogramleveltypeLargeCard = ({ acprogramleveltype, children}) => {
    // console.log("AcprogramleveltypeLargeCard", acprogramleveltype)
    return (
        <AcprogramleveltypeLargeCardLayout acprogramleveltype={ acprogramleveltype } grandchildren={children}>
            <AcprogramleveltypeMediumCard acprogramleveltype={ acprogramleveltype }/>
            <AcprogramleveltypeVectorLinksCard  acprogramleveltype={ acprogramleveltype } />
            { 
                acprogramleveltype?.createdby?<MediumCard3 user={ acprogramleveltype?.createdby } label={"Createdby"} />:null
            }
            { 
                acprogramleveltype?.changedby?<MediumCard4 user={ acprogramleveltype?.changedby } label={"Changedby"} />:null
            }
        </AcprogramleveltypeLargeCardLayout>
    )
}

