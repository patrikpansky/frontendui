// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FacilitytypeMediumCard } from './FacilitytypeMediumCard';

const FacilitytypeMediumCardRelayFragment = graphql`fragment FacilitytypeMediumCardRelayFragment on FacilitytypeGQLModel {
    id
    name
    nameen
    lastchange
    created
}`

export const FacilitytypeMediumCardRelay = ({ facilitytype, children }) => {
    const facilitytype_ = useFragment(FacilitytypeMediumCardRelayFragment, facilitytype);
    return (
        <FacilitytypeMediumCard facilitytype = { facilitytype_ }>
            {children}
        </FacilitytypeMediumCard>
    )
}

