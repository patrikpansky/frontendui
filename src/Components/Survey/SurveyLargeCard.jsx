import { SurveyMediumCard } from './SurveyMediumCard';
import { SurveyLargeCardLayout } from './SurveyLargeCardLayout';
import { SurveyVectorLinksCard } from './SurveyVectorLinksCard';

/**/
//  Survey: Survey
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby survey

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby survey


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ survey?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ survey?.createdby }/>

/**
 * Entity representing a relation between an user and a group
 */
export const SurveyLargeCard = ({ survey, children}) => {
    // console.log("SurveyLargeCard", survey)
    return (
        <SurveyLargeCardLayout survey={ survey } grandchildren={children}>
            <SurveyMediumCard survey={ survey }/>
            <SurveyVectorLinksCard  survey={ survey } />
            { 
                survey?.changedby?<MediumCard3 user={ survey?.changedby } label={"Changedby"} />:null
            }
            { 
                survey?.createdby?<MediumCard5 user={ survey?.createdby } label={"Createdby"} />:null
            }
        </SurveyLargeCardLayout>
    )
}

