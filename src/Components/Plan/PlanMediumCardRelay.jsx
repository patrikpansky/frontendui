// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { PlanMediumCard } from './PlanMediumCard';

const PlanMediumCardRelayFragment = graphql`fragment PlanMediumCardRelayFragment on PlanGQLModel {
    id
    name
    lastchange
    created
}`

export const PlanMediumCardRelay = ({ plan, children }) => {
    const plan_ = useFragment(PlanMediumCardRelayFragment, plan);
    return (
        <PlanMediumCard plan = { plan_ }>
            {children}
        </PlanMediumCard>
    )
}

