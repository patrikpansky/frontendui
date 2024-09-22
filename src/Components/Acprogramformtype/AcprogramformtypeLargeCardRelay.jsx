// import {graphql} from 'graphql'
import { AcprogramformtypeMediumCardRelay } from './UserMediumCardRelay';
import { AcprogramformtypeLargeCardLayout } from './AcprogramformtypeLargeCardLayout';

export const AcprogramformtypeLargeCardRelay = ({ acprogramformtype, children}) => {
    return (
        <AcprogramformtypeLargeCardLayout acprogramformtype={ acprogramformtype } grandchildren={children}>
            <AcprogramformtypeMediumCardRelay acprogramformtype={ acprogramformtype } />
        </AcprogramformtypeLargeCardLayout>
    )
}

