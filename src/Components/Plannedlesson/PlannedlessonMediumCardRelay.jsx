// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { PlannedlessonMediumCard } from './PlannedlessonMediumCard';

const PlannedlessonMediumCardRelayFragment = graphql`fragment PlannedlessonMediumCardRelayFragment on PlannedlessonGQLModel {
    id
    name
    lastchange
    created
    order
    length
}`

export const PlannedlessonMediumCardRelay = ({ plannedlesson, children }) => {
    const plannedlesson_ = useFragment(PlannedlessonMediumCardRelayFragment, plannedlesson);
    return (
        <PlannedlessonMediumCard plannedlesson = { plannedlesson_ }>
            {children}
        </PlannedlessonMediumCard>
    )
}

