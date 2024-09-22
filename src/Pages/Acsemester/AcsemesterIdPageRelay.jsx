import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcsemesterLargeCard } from "../../Components/Acsemester/AcsemesterLargeCard";

const AcsemesterIdPageRelayQuery = graphql`
    query AcsemesterPageRelayQuery($id: UUID!) { 
        result: acsemesterById(id: $id) { 
            id 
            ...AcsemesterMediumCardRelayFragment
        }
    }
`

export const AcsemesterIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcsemesterIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acsemester = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcsemesterLargeCard acsemester={ acsemester }>
                {/* other data */}
            </AcsemesterLargeCard>
        </Suspense>
    );    
}