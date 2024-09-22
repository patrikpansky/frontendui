import { AcsubjectMediumCard } from './AcsubjectMediumCard';
import { AcsubjectLargeCardLayout } from './AcsubjectLargeCardLayout';
import { AcsubjectVectorLinksCard } from './AcsubjectVectorLinksCard';

/**/
//  Acsubject: AcSubject
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acsubject

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acsubject

//  Program: Acprogram
// import { Acprogram } from '../Acprogram/AcprogramMediumCard';
// program acsubject

//  Grants: Group
// import { Group } from '../Group/GroupMediumCard';
// grants acsubject


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acsubject?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acsubject?.changedby }/>
import { AcprogramMediumCard as MediumCard7 } from '../Acprogram/AcprogramMediumCard';
// <MediumCard7 acprogram={ acsubject?.program }/>
import { GroupMediumCard as MediumCard9 } from '../Group/GroupMediumCard';
// <MediumCard9 group={ acsubject?.grants }/>

/**
 * Entity which connects programs and semesters, includes informations about subjects (divided into semesters)
 */
export const AcsubjectLargeCard = ({ acsubject, children}) => {
    // console.log("AcsubjectLargeCard", acsubject)
    return (
        <AcsubjectLargeCardLayout acsubject={ acsubject } grandchildren={children}>
            <AcsubjectMediumCard acsubject={ acsubject }/>
            <AcsubjectVectorLinksCard  acsubject={ acsubject } />
            { 
                acsubject?.createdby?<MediumCard3 user={ acsubject?.createdby } label={"Createdby"} />:null
            }
            { 
                acsubject?.changedby?<MediumCard4 user={ acsubject?.changedby } label={"Changedby"} />:null
            }
            { 
                acsubject?.program?<MediumCard7 acprogram={ acsubject?.program } label={"Program"} />:null
            }
            { 
                acsubject?.grants?<MediumCard9 group={ acsubject?.grants } label={"Grants"} />:null
            }
        </AcsubjectLargeCardLayout>
    )
}

