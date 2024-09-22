// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FacilityeventstatetypeMediumCard } from './FacilityeventstatetypeMediumCard';

const FacilityeventstatetypeMediumCardRelayFragment = graphql`fragment FacilityeventstatetypeMediumCardRelayFragment on FacilityeventstatetypeGQLModel {
    id
    name
    nameen
    lastchange
    created
}`

export const FacilityeventstatetypeMediumCardRelay = ({ facilityeventstatetype, children }) => {
    const facilityeventstatetype_ = useFragment(FacilityeventstatetypeMediumCardRelayFragment, facilityeventstatetype);
    return (
        <FacilityeventstatetypeMediumCard facilityeventstatetype = { facilityeventstatetype_ }>
            {children}
        </FacilityeventstatetypeMediumCard>
    )
}

