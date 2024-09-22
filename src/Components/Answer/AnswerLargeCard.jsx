import { AnswerMediumCard } from './AnswerMediumCard';
import { AnswerLargeCardLayout } from './AnswerLargeCardLayout';
import { AnswerVectorLinksCard } from './AnswerVectorLinksCard';

/**/
//  Answer: Answer
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby answer

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby answer

//  User: User
// import { User } from '../User/UserMediumCard';
// user answer

//  Question: Question
// import { Question } from '../Question/QuestionMediumCard';
// question answer


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ answer?.changedby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ answer?.createdby }/>
import { UserMediumCard as MediumCard8 } from '../User/UserMediumCard';
// <MediumCard8 user={ answer?.user }/>
import { QuestionMediumCard as MediumCard9 } from '../Question/QuestionMediumCard';
// <MediumCard9 question={ answer?.question }/>

/**
 * Entity representing an access to information
 */
export const AnswerLargeCard = ({ answer, children}) => {
    // console.log("AnswerLargeCard", answer)
    return (
        <AnswerLargeCardLayout answer={ answer } grandchildren={children}>
            <AnswerMediumCard answer={ answer }/>
            <AnswerVectorLinksCard  answer={ answer } />
            { 
                answer?.changedby?<MediumCard2 user={ answer?.changedby } label={"Changedby"} />:null
            }
            { 
                answer?.createdby?<MediumCard4 user={ answer?.createdby } label={"Createdby"} />:null
            }
            { 
                answer?.user?<MediumCard8 user={ answer?.user } label={"User"} />:null
            }
            { 
                answer?.question?<MediumCard9 question={ answer?.question } label={"Question"} />:null
            }
        </AnswerLargeCardLayout>
    )
}

