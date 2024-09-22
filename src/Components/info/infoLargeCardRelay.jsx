// import {graphql} from 'graphql'
import { infoMediumCardRelay } from './UserMediumCardRelay';
import { infoLargeCardLayout } from './infoLargeCardLayout';

export const infoLargeCardRelay = ({ pageinfo, children}) => {
    return (
        <infoLargeCardLayout pageinfo={ pageinfo } grandchildren={children}>
            <infoMediumCardRelay pageinfo={ pageinfo } />
        </infoLargeCardLayout>
    )
}

