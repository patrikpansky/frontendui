// import {graphql} from 'graphql'
import { ProjecttypeMediumCardRelay } from './UserMediumCardRelay';
import { ProjecttypeLargeCardLayout } from './ProjecttypeLargeCardLayout';

export const ProjecttypeLargeCardRelay = ({ projecttype, children}) => {
    return (
        <ProjecttypeLargeCardLayout projecttype={ projecttype } grandchildren={children}>
            <ProjecttypeMediumCardRelay projecttype={ projecttype } />
        </ProjecttypeLargeCardLayout>
    )
}

