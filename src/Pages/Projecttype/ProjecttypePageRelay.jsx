import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { ProjecttypeLargeCard } from "../../Components/Projecttype/ProjecttypeLargeCard";

const ProjecttypePageRelayQuery = graphql`
    query ProjecttypePageRelayQuery($id: UUID!) { 
        result: projecttypeById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            valid
            ...ProjecttypeMediumCardRelayFragment
        }
    }
`

export const ProjecttypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(ProjecttypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const projecttype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <ProjecttypeLargeCard projecttype={ projecttype }>
                {/* other data */}
            </ProjecttypeLargeCard>
        </Suspense>
    );    
}