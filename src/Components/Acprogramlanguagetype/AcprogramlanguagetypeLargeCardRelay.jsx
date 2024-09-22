// import {graphql} from 'graphql'
import { AcprogramlanguagetypeMediumCardRelay } from './UserMediumCardRelay';
import { AcprogramlanguagetypeLargeCardLayout } from './AcprogramlanguagetypeLargeCardLayout';

export const AcprogramlanguagetypeLargeCardRelay = ({ acprogramlanguagetype, children}) => {
    return (
        <AcprogramlanguagetypeLargeCardLayout acprogramlanguagetype={ acprogramlanguagetype } grandchildren={children}>
            <AcprogramlanguagetypeMediumCardRelay acprogramlanguagetype={ acprogramlanguagetype } />
        </AcprogramlanguagetypeLargeCardLayout>
    )
}

