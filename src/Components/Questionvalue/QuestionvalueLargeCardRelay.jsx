// import {graphql} from 'graphql'
import { QuestionvalueMediumCardRelay } from './UserMediumCardRelay';
import { QuestionvalueLargeCardLayout } from './QuestionvalueLargeCardLayout';

export const QuestionvalueLargeCardRelay = ({ questionvalue, children}) => {
    return (
        <QuestionvalueLargeCardLayout questionvalue={ questionvalue } grandchildren={children}>
            <QuestionvalueMediumCardRelay questionvalue={ questionvalue } />
        </QuestionvalueLargeCardLayout>
    )
}

