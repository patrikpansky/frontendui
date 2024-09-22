// import {graphql} from 'graphql'
import { AcsemesterMediumCardRelay } from './UserMediumCardRelay';
import { AcsemesterLargeCardLayout } from './AcsemesterLargeCardLayout';

export const AcsemesterLargeCardRelay = ({ acsemester, children}) => {
    return (
        <AcsemesterLargeCardLayout acsemester={ acsemester } grandchildren={children}>
            <AcsemesterMediumCardRelay acsemester={ acsemester } />
        </AcsemesterLargeCardLayout>
    )
}

