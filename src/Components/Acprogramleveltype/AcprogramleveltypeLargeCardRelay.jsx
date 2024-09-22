// import {graphql} from 'graphql'
import { AcprogramleveltypeMediumCardRelay } from './UserMediumCardRelay';
import { AcprogramleveltypeLargeCardLayout } from './AcprogramleveltypeLargeCardLayout';

export const AcprogramleveltypeLargeCardRelay = ({ acprogramleveltype, children}) => {
    return (
        <AcprogramleveltypeLargeCardLayout acprogramleveltype={ acprogramleveltype } grandchildren={children}>
            <AcprogramleveltypeMediumCardRelay acprogramleveltype={ acprogramleveltype } />
        </AcprogramleveltypeLargeCardLayout>
    )
}

