// import {graphql} from 'graphql'
import { AcclassificationlevelMediumCardRelay } from './UserMediumCardRelay';
import { AcclassificationlevelLargeCardLayout } from './AcclassificationlevelLargeCardLayout';

export const AcclassificationlevelLargeCardRelay = ({ acclassificationlevel, children}) => {
    return (
        <AcclassificationlevelLargeCardLayout acclassificationlevel={ acclassificationlevel } grandchildren={children}>
            <AcclassificationlevelMediumCardRelay acclassificationlevel={ acclassificationlevel } />
        </AcclassificationlevelLargeCardLayout>
    )
}

