import { SurveytypeMediumCard } from './SurveytypeMediumCard';
import { SurveytypeLargeCardLayout } from './SurveytypeLargeCardLayout';
import { SurveytypeVectorLinksCard } from './SurveytypeVectorLinksCard';

/**/
//  Surveytype: SurveyType
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby surveytype

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby surveytype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ surveytype?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ surveytype?.createdby }/>

/**
 * Entity representing a relation between an user and a group
 */
export const SurveytypeLargeCard = ({ surveytype, children}) => {
    // console.log("SurveytypeLargeCard", surveytype)
    return (
        <SurveytypeLargeCardLayout surveytype={ surveytype } grandchildren={children}>
            <SurveytypeMediumCard surveytype={ surveytype }/>
            <SurveytypeVectorLinksCard  surveytype={ surveytype } />
            { 
                surveytype?.changedby?<MediumCard3 user={ surveytype?.changedby } label={"Changedby"} />:null
            }
            { 
                surveytype?.createdby?<MediumCard5 user={ surveytype?.createdby } label={"Createdby"} />:null
            }
        </SurveytypeLargeCardLayout>
    )
}

