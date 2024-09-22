// import {graphql} from 'graphql'
import { AcclassificationMediumCardRelay } from './UserMediumCardRelay';
import { AcclassificationLargeCardLayout } from './AcclassificationLargeCardLayout';

export const AcclassificationLargeCardRelay = ({ acclassification, children}) => {
    return (
        <AcclassificationLargeCardLayout acclassification={ acclassification } grandchildren={children}>
            <AcclassificationMediumCardRelay acclassification={ acclassification } />
        </AcclassificationLargeCardLayout>
    )
}

