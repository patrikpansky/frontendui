// import {graphql} from 'graphql'
import { AcsubjectMediumCardRelay } from './UserMediumCardRelay';
import { AcsubjectLargeCardLayout } from './AcsubjectLargeCardLayout';

export const AcsubjectLargeCardRelay = ({ acsubject, children}) => {
    return (
        <AcsubjectLargeCardLayout acsubject={ acsubject } grandchildren={children}>
            <AcsubjectMediumCardRelay acsubject={ acsubject } />
        </AcsubjectLargeCardLayout>
    )
}

