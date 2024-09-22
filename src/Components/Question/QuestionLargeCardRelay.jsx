// import {graphql} from 'graphql'
import { QuestionMediumCardRelay } from './UserMediumCardRelay';
import { QuestionLargeCardLayout } from './QuestionLargeCardLayout';

export const QuestionLargeCardRelay = ({ question, children}) => {
    return (
        <QuestionLargeCardLayout question={ question } grandchildren={children}>
            <QuestionMediumCardRelay question={ question } />
        </QuestionLargeCardLayout>
    )
}

