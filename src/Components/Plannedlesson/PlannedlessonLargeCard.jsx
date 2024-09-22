import { PlannedlessonMediumCard } from './PlannedlessonMediumCard';
import { PlannedlessonLargeCardLayout } from './PlannedlessonLargeCardLayout';
import { PlannedlessonVectorLinksCard } from './PlannedlessonVectorLinksCard';

/**/
//  Plannedlesson: PlannedLesson
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby plannedlesson

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby plannedlesson

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject plannedlesson

//  Type: Aclessontype
// import { Aclessontype } from '../Aclessontype/AclessontypeMediumCard';
// type plannedlesson

//  Linkedto: Plannedlesson
// import { Plannedlesson } from '../Plannedlesson/PlannedlessonMediumCard';
// linkedto plannedlesson

//  Event: Event
// import { Event } from '../Event/EventMediumCard';
// event plannedlesson

//  Topic: Actopic
// import { Actopic } from '../Actopic/ActopicMediumCard';
// topic plannedlesson

//  Semester: Acsemester
// import { Acsemester } from '../Acsemester/AcsemesterMediumCard';
// semester plannedlesson

//  Plan: Plan
// import { Plan } from '../Plan/PlanMediumCard';
// plan plannedlesson


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ plannedlesson?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ plannedlesson?.createdby }/>
import { RbacobjectMediumCard as MediumCard6 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard6 rbacobject={ plannedlesson?.rbacobject }/>
import { AclessontypeMediumCard as MediumCard9 } from '../Aclessontype/AclessontypeMediumCard';
// <MediumCard9 aclessontype={ plannedlesson?.type }/>
import { PlannedlessonMediumCard as MediumCard10 } from '../Plannedlesson/PlannedlessonMediumCard';
// <MediumCard10 plannedlesson={ plannedlesson?.linkedto }/>
import { EventMediumCard as MediumCard15 } from '../Event/EventMediumCard';
// <MediumCard15 event={ plannedlesson?.event }/>
import { ActopicMediumCard as MediumCard16 } from '../Actopic/ActopicMediumCard';
// <MediumCard16 actopic={ plannedlesson?.topic }/>
import { AcsemesterMediumCard as MediumCard17 } from '../Acsemester/AcsemesterMediumCard';
// <MediumCard17 acsemester={ plannedlesson?.semester }/>
import { PlanMediumCard as MediumCard18 } from '../Plan/PlanMediumCard';
// <MediumCard18 plan={ plannedlesson?.plan }/>

/**
 * Entity representing a planned lesson for timetable creation
 */
export const PlannedlessonLargeCard = ({ plannedlesson, children}) => {
    // console.log("PlannedlessonLargeCard", plannedlesson)
    return (
        <PlannedlessonLargeCardLayout plannedlesson={ plannedlesson } grandchildren={children}>
            <PlannedlessonMediumCard plannedlesson={ plannedlesson }/>
            <PlannedlessonVectorLinksCard  plannedlesson={ plannedlesson } />
            { 
                plannedlesson?.changedby?<MediumCard2 user={ plannedlesson?.changedby } label={"Changedby"} />:null
            }
            { 
                plannedlesson?.createdby?<MediumCard5 user={ plannedlesson?.createdby } label={"Createdby"} />:null
            }
            { 
                plannedlesson?.rbacobject?<MediumCard6 rbacobject={ plannedlesson?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                plannedlesson?.type?<MediumCard9 aclessontype={ plannedlesson?.type } label={"Type"} />:null
            }
            { 
                plannedlesson?.linkedto?<MediumCard10 plannedlesson={ plannedlesson?.linkedto } label={"Linkedto"} />:null
            }
            { 
                plannedlesson?.event?<MediumCard15 event={ plannedlesson?.event } label={"Event"} />:null
            }
            { 
                plannedlesson?.topic?<MediumCard16 actopic={ plannedlesson?.topic } label={"Topic"} />:null
            }
            { 
                plannedlesson?.semester?<MediumCard17 acsemester={ plannedlesson?.semester } label={"Semester"} />:null
            }
            { 
                plannedlesson?.plan?<MediumCard18 plan={ plannedlesson?.plan } label={"Plan"} />:null
            }
        </PlannedlessonLargeCardLayout>
    )
}

