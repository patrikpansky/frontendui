// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { ProjectcategoryMediumCard } from './ProjectcategoryMediumCard';

const ProjectcategoryMediumCardRelayFragment = graphql`fragment ProjectcategoryMediumCardRelayFragment on ProjectcategoryGQLModel {
    id
    name
    nameen
    lastchange
    created
}`

export const ProjectcategoryMediumCardRelay = ({ projectcategory, children }) => {
    const projectcategory_ = useFragment(ProjectcategoryMediumCardRelayFragment, projectcategory);
    return (
        <ProjectcategoryMediumCard projectcategory = { projectcategory_ }>
            {children}
        </ProjectcategoryMediumCard>
    )
}

