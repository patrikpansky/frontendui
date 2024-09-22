import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FacilityLargeCard } from "../../Components/Facility/FacilityLargeCard";

const FacilityIdPageRelayQuery = graphql`
    query FacilityPageRelayQuery($id: UUID!) { 
        result: facilityById(id: $id) { 
            id 
            ...FacilityMediumCardRelayFragment
        }
    }
`

export const FacilityIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FacilityIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const facility = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FacilityLargeCard facility={ facility }>
                {/* other data */}
            </FacilityLargeCard>
        </Suspense>
    );    
}