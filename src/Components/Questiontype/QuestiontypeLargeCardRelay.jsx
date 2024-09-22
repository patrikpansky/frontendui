// import {graphql} from 'graphql'
import { QuestiontypeMediumCardRelay } from './UserMediumCardRelay';
import { QuestiontypeLargeCardLayout } from './QuestiontypeLargeCardLayout';

export const QuestiontypeLargeCardRelay = ({ questiontype, children}) => {
    return (
        <QuestiontypeLargeCardLayout questiontype={ questiontype } grandchildren={children}>
            <QuestiontypeMediumCardRelay questiontype={ questiontype } />
        </QuestiontypeLargeCardLayout>
    )
}

