import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { ProjectcategoryLargeCard } from "../../Components/Projectcategory/ProjectcategoryLargeCard";

const ProjectcategoryPageRelayQuery = graphql`
    query ProjectcategoryPageRelayQuery($id: UUID!) { 
        result: projectcategoryById(id: $id) { 
            id
            name
            nameen
            lastchange
            created
            ...ProjectcategoryMediumCardRelayFragment
        }
    }
`

export const ProjectcategoryPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(ProjectcategoryPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const projectcategory = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <ProjectcategoryLargeCard projectcategory={ projectcategory }>
                {/* other data */}
            </ProjectcategoryLargeCard>
        </Suspense>
    );    
}