import { AcclassificationlevelMediumCard } from './AcclassificationlevelMediumCard';
import { AcclassificationlevelLargeCardLayout } from './AcclassificationlevelLargeCardLayout';
import { AcclassificationlevelVectorLinksCard } from './AcclassificationlevelVectorLinksCard';

/**/
//  Acclassificationlevel: AcClassificationLevel
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acclassificationlevel

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acclassificationlevel


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ acclassificationlevel?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ acclassificationlevel?.changedby }/>

/**
 * Mark which student could get as an exam evaluation
 */
export const AcclassificationlevelLargeCard = ({ acclassificationlevel, children}) => {
    // console.log("AcclassificationlevelLargeCard", acclassificationlevel)
    return (
        <AcclassificationlevelLargeCardLayout acclassificationlevel={ acclassificationlevel } grandchildren={children}>
            <AcclassificationlevelMediumCard acclassificationlevel={ acclassificationlevel }/>
            <AcclassificationlevelVectorLinksCard  acclassificationlevel={ acclassificationlevel } />
            { 
                acclassificationlevel?.createdby?<MediumCard3 user={ acclassificationlevel?.createdby } label={"Createdby"} />:null
            }
            { 
                acclassificationlevel?.changedby?<MediumCard4 user={ acclassificationlevel?.changedby } label={"Changedby"} />:null
            }
        </AcclassificationlevelLargeCardLayout>
    )
}

