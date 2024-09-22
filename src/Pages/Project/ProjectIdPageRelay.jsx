import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { ProjectLargeCard } from "../../Components/Project/ProjectLargeCard";

const ProjectIdPageRelayQuery = graphql`
    query ProjectPageRelayQuery($id: UUID!) { 
        result: projectById(id: $id) { 
            id 
            ...ProjectMediumCardRelayFragment
        }
    }
`

export const ProjectIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(ProjectIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const project = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <ProjectLargeCard project={ project }>
                {/* other data */}
            </ProjectLargeCard>
        </Suspense>
    );    
}