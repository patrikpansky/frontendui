// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { ActopicMediumCard } from './ActopicMediumCard';

const ActopicMediumCardRelayFragment = graphql`fragment ActopicMediumCardRelayFragment on ActopicGQLModel {
    id
    name
    nameen
    created
    lastchange
    order
}`

export const ActopicMediumCardRelay = ({ actopic, children }) => {
    const actopic_ = useFragment(ActopicMediumCardRelayFragment, actopic);
    return (
        <ActopicMediumCard actopic = { actopic_ }>
            {children}
        </ActopicMediumCard>
    )
}

