// import {graphql} from 'graphql'
import { FormsectionMediumCardRelay } from './UserMediumCardRelay';
import { FormsectionLargeCardLayout } from './FormsectionLargeCardLayout';

export const FormsectionLargeCardRelay = ({ formsection, children}) => {
    return (
        <FormsectionLargeCardLayout formsection={ formsection } grandchildren={children}>
            <FormsectionMediumCardRelay formsection={ formsection } />
        </FormsectionLargeCardLayout>
    )
}

