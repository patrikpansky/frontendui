import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { ProjectLargeCard } from "../../Components/Project/ProjectLargeCard";

const ProjectPageRelayQuery = graphql`
    query ProjectPageRelayQuery($id: UUID!) { 
        result: projectById(id: $id) { 
            id
            name
            startdate
            enddate
            created
            lastchange
            valid
            ...ProjectMediumCardRelayFragment
        }
    }
`

export const ProjectPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(ProjectPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const project = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <ProjectLargeCard project={ project }>
                {/* other data */}
            </ProjectLargeCard>
        </Suspense>
    );    
}