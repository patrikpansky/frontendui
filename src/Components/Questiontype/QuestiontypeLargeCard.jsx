import { QuestiontypeMediumCard } from './QuestiontypeMediumCard';
import { QuestiontypeLargeCardLayout } from './QuestiontypeLargeCardLayout';
import { QuestiontypeVectorLinksCard } from './QuestiontypeVectorLinksCard';

/**/
//  Questiontype: QuestionType
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby questiontype

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby questiontype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ questiontype?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ questiontype?.createdby }/>

/**
 * Entity representing a relation between an user and a group
 */
export const QuestiontypeLargeCard = ({ questiontype, children}) => {
    // console.log("QuestiontypeLargeCard", questiontype)
    return (
        <QuestiontypeLargeCardLayout questiontype={ questiontype } grandchildren={children}>
            <QuestiontypeMediumCard questiontype={ questiontype }/>
            <QuestiontypeVectorLinksCard  questiontype={ questiontype } />
            { 
                questiontype?.changedby?<MediumCard3 user={ questiontype?.changedby } label={"Changedby"} />:null
            }
            { 
                questiontype?.createdby?<MediumCard5 user={ questiontype?.createdby } label={"Createdby"} />:null
            }
        </QuestiontypeLargeCardLayout>
    )
}

