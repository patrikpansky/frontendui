// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { StatetransitionMediumCard } from './StatetransitionMediumCard';

const StatetransitionMediumCardRelayFragment = graphql`fragment StatetransitionMediumCardRelayFragment on StatetransitionGQLModel {
    id
    created
    lastchange
    name
    nameen
}`

export const StatetransitionMediumCardRelay = ({ statetransition, children }) => {
    const statetransition_ = useFragment(StatetransitionMediumCardRelayFragment, statetransition);
    return (
        <StatetransitionMediumCard statetransition = { statetransition_ }>
            {children}
        </StatetransitionMediumCard>
    )
}

