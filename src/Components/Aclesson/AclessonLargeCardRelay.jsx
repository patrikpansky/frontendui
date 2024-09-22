// import {graphql} from 'graphql'
import { AclessonMediumCardRelay } from './UserMediumCardRelay';
import { AclessonLargeCardLayout } from './AclessonLargeCardLayout';

export const AclessonLargeCardRelay = ({ aclesson, children}) => {
    return (
        <AclessonLargeCardLayout aclesson={ aclesson } grandchildren={children}>
            <AclessonMediumCardRelay aclesson={ aclesson } />
        </AclessonLargeCardLayout>
    )
}

