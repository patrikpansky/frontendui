// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FacilityMediumCard } from './FacilityMediumCard';

const FacilityMediumCardRelayFragment = graphql`fragment FacilityMediumCardRelayFragment on FacilityGQLModel {
    id
    name
    nameen
    lastchange
    created
    label
    address
    valid
    capacity
    geometry
    geolocation
}`

export const FacilityMediumCardRelay = ({ facility, children }) => {
    const facility_ = useFragment(FacilityMediumCardRelayFragment, facility);
    return (
        <FacilityMediumCard facility = { facility_ }>
            {children}
        </FacilityMediumCard>
    )
}

