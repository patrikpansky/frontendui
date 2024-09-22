// import {graphql} from 'graphql'
import { ProjectcategoryMediumCardRelay } from './UserMediumCardRelay';
import { ProjectcategoryLargeCardLayout } from './ProjectcategoryLargeCardLayout';

export const ProjectcategoryLargeCardRelay = ({ projectcategory, children}) => {
    return (
        <ProjectcategoryLargeCardLayout projectcategory={ projectcategory } grandchildren={children}>
            <ProjectcategoryMediumCardRelay projectcategory={ projectcategory } />
        </ProjectcategoryLargeCardLayout>
    )
}

