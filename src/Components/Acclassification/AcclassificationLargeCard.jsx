import { AcclassificationMediumCard } from './AcclassificationMediumCard';
import { AcclassificationLargeCardLayout } from './AcclassificationLargeCardLayout';
import { AcclassificationVectorLinksCard } from './AcclassificationVectorLinksCard';

/**/
//  Acclassification: AcClassification
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby acclassification

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby acclassification

//  Student: User
// import { User } from '../User/UserMediumCard';
// student acclassification

//  Semester: Acsemester
// import { Acsemester } from '../Acsemester/AcsemesterMediumCard';
// semester acclassification

//  Level: Acclassificationlevel
// import { Acclassificationlevel } from '../Acclassificationlevel/AcclassificationlevelMediumCard';
// level acclassification


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ acclassification?.createdby }/>
import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ acclassification?.changedby }/>
import { UserMediumCard as MediumCard7 } from '../User/UserMediumCard';
// <MediumCard7 user={ acclassification?.student }/>
import { AcsemesterMediumCard as MediumCard8 } from '../Acsemester/AcsemesterMediumCard';
// <MediumCard8 acsemester={ acclassification?.semester }/>
import { AcclassificationlevelMediumCard as MediumCard9 } from '../Acclassificationlevel/AcclassificationlevelMediumCard';
// <MediumCard9 acclassificationlevel={ acclassification?.level }/>

/**
 * Entity which holds a exam result for a subject semester and user / student
 */
export const AcclassificationLargeCard = ({ acclassification, children}) => {
    // console.log("AcclassificationLargeCard", acclassification)
    return (
        <AcclassificationLargeCardLayout acclassification={ acclassification } grandchildren={children}>
            <AcclassificationMediumCard acclassification={ acclassification }/>
            <AcclassificationVectorLinksCard  acclassification={ acclassification } />
            { 
                acclassification?.createdby?<MediumCard1 user={ acclassification?.createdby } label={"Createdby"} />:null
            }
            { 
                acclassification?.changedby?<MediumCard2 user={ acclassification?.changedby } label={"Changedby"} />:null
            }
            { 
                acclassification?.student?<MediumCard7 user={ acclassification?.student } label={"Student"} />:null
            }
            { 
                acclassification?.semester?<MediumCard8 acsemester={ acclassification?.semester } label={"Semester"} />:null
            }
            { 
                acclassification?.level?<MediumCard9 acclassificationlevel={ acclassification?.level } label={"Level"} />:null
            }
        </AcclassificationLargeCardLayout>
    )
}

