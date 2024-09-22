import { QuestionMediumCard } from './QuestionMediumCard';
import { QuestionLargeCardLayout } from './QuestionLargeCardLayout';
import { QuestionVectorLinksCard } from './QuestionVectorLinksCard';

/**/
//  Question: Question
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby question

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby question

//  Survey: Survey
// import { Survey } from '../Survey/SurveyMediumCard';
// survey question

//  Type: Questiontype
// import { Questiontype } from '../Questiontype/QuestiontypeMediumCard';
// type question


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ question?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ question?.createdby }/>
import { SurveyMediumCard as MediumCard8 } from '../Survey/SurveyMediumCard';
// <MediumCard8 survey={ question?.survey }/>
import { QuestiontypeMediumCard as MediumCard9 } from '../Questiontype/QuestiontypeMediumCard';
// <MediumCard9 questiontype={ question?.type }/>

/**
 * Entity representing an access to information
 */
export const QuestionLargeCard = ({ question, children}) => {
    // console.log("QuestionLargeCard", question)
    return (
        <QuestionLargeCardLayout question={ question } grandchildren={children}>
            <QuestionMediumCard question={ question }/>
            <QuestionVectorLinksCard  question={ question } />
            { 
                question?.changedby?<MediumCard3 user={ question?.changedby } label={"Changedby"} />:null
            }
            { 
                question?.createdby?<MediumCard5 user={ question?.createdby } label={"Createdby"} />:null
            }
            { 
                question?.survey?<MediumCard8 survey={ question?.survey } label={"Survey"} />:null
            }
            { 
                question?.type?<MediumCard9 questiontype={ question?.type } label={"Type"} />:null
            }
        </QuestionLargeCardLayout>
    )
}

