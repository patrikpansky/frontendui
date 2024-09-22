import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramtitletypeLargeCard } from "../../Components/Acprogramtitletype/AcprogramtitletypeLargeCard";

const AcprogramtitletypePageRelayQuery = graphql`
    query AcprogramtitletypePageRelayQuery($id: UUID!) { 
        result: acprogramtitletypeById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            ...AcprogramtitletypeMediumCardRelayFragment
        }
    }
`

export const AcprogramtitletypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramtitletypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramtitletype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramtitletypeLargeCard acprogramtitletype={ acprogramtitletype }>
                {/* other data */}
            </AcprogramtitletypeLargeCard>
        </Suspense>
    );    
}