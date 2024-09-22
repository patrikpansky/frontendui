import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FacilitytypeLargeCard } from "../../Components/Facilitytype/FacilitytypeLargeCard";

const FacilitytypeIdPageRelayQuery = graphql`
    query FacilitytypePageRelayQuery($id: UUID!) { 
        result: facilitytypeById(id: $id) { 
            id 
            ...FacilitytypeMediumCardRelayFragment
        }
    }
`

export const FacilitytypeIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FacilitytypeIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const facilitytype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FacilitytypeLargeCard facilitytype={ facilitytype }>
                {/* other data */}
            </FacilitytypeLargeCard>
        </Suspense>
    );    
}