import { QuestionvalueMediumCard } from './QuestionvalueMediumCard';
import { QuestionvalueLargeCardLayout } from './QuestionvalueLargeCardLayout';
import { QuestionvalueVectorLinksCard } from './QuestionvalueVectorLinksCard';

/**/
//  Questionvalue: QuestionValue
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby questionvalue

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby questionvalue

//  Question: Question
// import { Question } from '../Question/QuestionMediumCard';
// question questionvalue


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ questionvalue?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ questionvalue?.createdby }/>
import { QuestionMediumCard as MediumCard7 } from '../Question/QuestionMediumCard';
// <MediumCard7 question={ questionvalue?.question }/>

/**
 * Entity representing an access to information
 */
export const QuestionvalueLargeCard = ({ questionvalue, children}) => {
    // console.log("QuestionvalueLargeCard", questionvalue)
    return (
        <QuestionvalueLargeCardLayout questionvalue={ questionvalue } grandchildren={children}>
            <QuestionvalueMediumCard questionvalue={ questionvalue }/>
            <QuestionvalueVectorLinksCard  questionvalue={ questionvalue } />
            { 
                questionvalue?.changedby?<MediumCard3 user={ questionvalue?.changedby } label={"Changedby"} />:null
            }
            { 
                questionvalue?.createdby?<MediumCard5 user={ questionvalue?.createdby } label={"Createdby"} />:null
            }
            { 
                questionvalue?.question?<MediumCard7 question={ questionvalue?.question } label={"Question"} />:null
            }
        </QuestionvalueLargeCardLayout>
    )
}

