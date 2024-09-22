// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { StatemachineMediumCard } from './StatemachineMediumCard';

const StatemachineMediumCardRelayFragment = graphql`fragment StatemachineMediumCardRelayFragment on StatemachineGQLModel {
    id
    created
    lastchange
    name
    nameen
}`

export const StatemachineMediumCardRelay = ({ statemachine, children }) => {
    const statemachine_ = useFragment(StatemachineMediumCardRelayFragment, statemachine);
    return (
        <StatemachineMediumCard statemachine = { statemachine_ }>
            {children}
        </StatemachineMediumCard>
    )
}

