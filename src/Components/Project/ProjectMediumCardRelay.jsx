// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { ProjectMediumCard } from './ProjectMediumCard';

const ProjectMediumCardRelayFragment = graphql`fragment ProjectMediumCardRelayFragment on ProjectGQLModel {
    id
    name
    startdate
    enddate
    created
    lastchange
    valid
}`

export const ProjectMediumCardRelay = ({ project, children }) => {
    const project_ = useFragment(ProjectMediumCardRelayFragment, project);
    return (
        <ProjectMediumCard project = { project_ }>
            {children}
        </ProjectMediumCard>
    )
}

