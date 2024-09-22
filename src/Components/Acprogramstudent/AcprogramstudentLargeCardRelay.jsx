// import {graphql} from 'graphql'
import { AcprogramstudentMediumCardRelay } from './UserMediumCardRelay';
import { AcprogramstudentLargeCardLayout } from './AcprogramstudentLargeCardLayout';

export const AcprogramstudentLargeCardRelay = ({ acprogramstudent, children}) => {
    return (
        <AcprogramstudentLargeCardLayout acprogramstudent={ acprogramstudent } grandchildren={children}>
            <AcprogramstudentMediumCardRelay acprogramstudent={ acprogramstudent } />
        </AcprogramstudentLargeCardLayout>
    )
}

