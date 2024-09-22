// import {graphql} from 'graphql'
import { AnswerMediumCardRelay } from './UserMediumCardRelay';
import { AnswerLargeCardLayout } from './AnswerLargeCardLayout';

export const AnswerLargeCardRelay = ({ answer, children}) => {
    return (
        <AnswerLargeCardLayout answer={ answer } grandchildren={children}>
            <AnswerMediumCardRelay answer={ answer } />
        </AnswerLargeCardLayout>
    )
}

