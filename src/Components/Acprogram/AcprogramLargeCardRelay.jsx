// import {graphql} from 'graphql'
import { AcprogramMediumCardRelay } from './UserMediumCardRelay';
import { AcprogramLargeCardLayout } from './AcprogramLargeCardLayout';

export const AcprogramLargeCardRelay = ({ acprogram, children}) => {
    return (
        <AcprogramLargeCardLayout acprogram={ acprogram } grandchildren={children}>
            <AcprogramMediumCardRelay acprogram={ acprogram } />
        </AcprogramLargeCardLayout>
    )
}

