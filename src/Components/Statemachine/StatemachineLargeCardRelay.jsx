// import {graphql} from 'graphql'
import { StatemachineMediumCardRelay } from './UserMediumCardRelay';
import { StatemachineLargeCardLayout } from './StatemachineLargeCardLayout';

export const StatemachineLargeCardRelay = ({ statemachine, children}) => {
    return (
        <StatemachineLargeCardLayout statemachine={ statemachine } grandchildren={children}>
            <StatemachineMediumCardRelay statemachine={ statemachine } />
        </StatemachineLargeCardLayout>
    )
}

