import { AcclassificationtypeMediumCard } from './AcclassificationtypeMediumCard';
import { AcclassificationtypeLargeCardLayout } from './AcclassificationtypeLargeCardLayout';
import { AcclassificationtypeVectorLinksCard } from './AcclassificationtypeVectorLinksCard';

/**/
//  Acclassificationtype: AcClassificationType
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acclassificationtype

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acclassificationtype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acclassificationtype?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acclassificationtype?.changedby }/>

/**
 * Classification at the end of semester
 */
export const AcclassificationtypeLargeCard = ({ acclassificationtype, children}) => {
    // console.log("AcclassificationtypeLargeCard", acclassificationtype)
    return (
        <AcclassificationtypeLargeCardLayout acclassificationtype={ acclassificationtype } grandchildren={children}>
            <AcclassificationtypeMediumCard acclassificationtype={ acclassificationtype }/>
            <AcclassificationtypeVectorLinksCard  acclassificationtype={ acclassificationtype } />
            { 
                acclassificationtype?.createdby?<MediumCard3 user={ acclassificationtype?.createdby } label={"Createdby"} />:null
            }
            { 
                acclassificationtype?.changedby?<MediumCard4 user={ acclassificationtype?.changedby } label={"Changedby"} />:null
            }
        </AcclassificationtypeLargeCardLayout>
    )
}

