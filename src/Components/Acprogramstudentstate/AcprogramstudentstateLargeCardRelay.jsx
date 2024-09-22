// import {graphql} from 'graphql'
import { AcprogramstudentstateMediumCardRelay } from './UserMediumCardRelay';
import { AcprogramstudentstateLargeCardLayout } from './AcprogramstudentstateLargeCardLayout';

export const AcprogramstudentstateLargeCardRelay = ({ acprogramstudentstate, children}) => {
    return (
        <AcprogramstudentstateLargeCardLayout acprogramstudentstate={ acprogramstudentstate } grandchildren={children}>
            <AcprogramstudentstateMediumCardRelay acprogramstudentstate={ acprogramstudentstate } />
        </AcprogramstudentstateLargeCardLayout>
    )
}

