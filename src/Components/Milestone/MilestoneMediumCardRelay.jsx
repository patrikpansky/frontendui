// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { MilestoneMediumCard } from './MilestoneMediumCard';

const MilestoneMediumCardRelayFragment = graphql`fragment MilestoneMediumCardRelayFragment on MilestoneGQLModel {
    id
    name
    startdate
    enddate
    lastchange
    created
    valid
}`

export const MilestoneMediumCardRelay = ({ milestone, children }) => {
    const milestone_ = useFragment(MilestoneMediumCardRelayFragment, milestone);
    return (
        <MilestoneMediumCard milestone = { milestone_ }>
            {children}
        </MilestoneMediumCard>
    )
}

