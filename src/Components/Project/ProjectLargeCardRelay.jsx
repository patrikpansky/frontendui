// import {graphql} from 'graphql'
import { ProjectMediumCardRelay } from './UserMediumCardRelay';
import { ProjectLargeCardLayout } from './ProjectLargeCardLayout';

export const ProjectLargeCardRelay = ({ project, children}) => {
    return (
        <ProjectLargeCardLayout project={ project } grandchildren={children}>
            <ProjectMediumCardRelay project={ project } />
        </ProjectLargeCardLayout>
    )
}

