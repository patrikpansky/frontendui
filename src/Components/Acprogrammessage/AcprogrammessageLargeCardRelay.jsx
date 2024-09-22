// import {graphql} from 'graphql'
import { AcprogrammessageMediumCardRelay } from './UserMediumCardRelay';
import { AcprogrammessageLargeCardLayout } from './AcprogrammessageLargeCardLayout';

export const AcprogrammessageLargeCardRelay = ({ acprogrammessage, children}) => {
    return (
        <AcprogrammessageLargeCardLayout acprogrammessage={ acprogrammessage } grandchildren={children}>
            <AcprogrammessageMediumCardRelay acprogrammessage={ acprogrammessage } />
        </AcprogrammessageLargeCardLayout>
    )
}

