// import {graphql} from 'graphql'
import { AcprogramtitletypeMediumCardRelay } from './UserMediumCardRelay';
import { AcprogramtitletypeLargeCardLayout } from './AcprogramtitletypeLargeCardLayout';

export const AcprogramtitletypeLargeCardRelay = ({ acprogramtitletype, children}) => {
    return (
        <AcprogramtitletypeLargeCardLayout acprogramtitletype={ acprogramtitletype } grandchildren={children}>
            <AcprogramtitletypeMediumCardRelay acprogramtitletype={ acprogramtitletype } />
        </AcprogramtitletypeLargeCardLayout>
    )
}

