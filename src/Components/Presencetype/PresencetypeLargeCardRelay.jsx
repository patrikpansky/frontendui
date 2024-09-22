// import {graphql} from 'graphql'
import { PresencetypeMediumCardRelay } from './UserMediumCardRelay';
import { PresencetypeLargeCardLayout } from './PresencetypeLargeCardLayout';

export const PresencetypeLargeCardRelay = ({ presencetype, children}) => {
    return (
        <PresencetypeLargeCardLayout presencetype={ presencetype } grandchildren={children}>
            <PresencetypeMediumCardRelay presencetype={ presencetype } />
        </PresencetypeLargeCardLayout>
    )
}

