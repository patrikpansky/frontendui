// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { ProjecttypeMediumCard } from './ProjecttypeMediumCard';

const ProjecttypeMediumCardRelayFragment = graphql`fragment ProjecttypeMediumCardRelayFragment on ProjecttypeGQLModel {
    id
    name
    nameen
    created
    lastchange
    valid
}`

export const ProjecttypeMediumCardRelay = ({ projecttype, children }) => {
    const projecttype_ = useFragment(ProjecttypeMediumCardRelayFragment, projecttype);
    return (
        <ProjecttypeMediumCard projecttype = { projecttype_ }>
            {children}
        </ProjecttypeMediumCard>
    )
}

