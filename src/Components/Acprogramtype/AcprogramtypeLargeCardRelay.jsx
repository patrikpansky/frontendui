// import {graphql} from 'graphql'
import { AcprogramtypeMediumCardRelay } from './UserMediumCardRelay';
import { AcprogramtypeLargeCardLayout } from './AcprogramtypeLargeCardLayout';

export const AcprogramtypeLargeCardRelay = ({ acprogramtype, children}) => {
    return (
        <AcprogramtypeLargeCardLayout acprogramtype={ acprogramtype } grandchildren={children}>
            <AcprogramtypeMediumCardRelay acprogramtype={ acprogramtype } />
        </AcprogramtypeLargeCardLayout>
    )
}

