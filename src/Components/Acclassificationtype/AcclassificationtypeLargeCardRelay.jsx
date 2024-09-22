// import {graphql} from 'graphql'
import { AcclassificationtypeMediumCardRelay } from './UserMediumCardRelay';
import { AcclassificationtypeLargeCardLayout } from './AcclassificationtypeLargeCardLayout';

export const AcclassificationtypeLargeCardRelay = ({ acclassificationtype, children}) => {
    return (
        <AcclassificationtypeLargeCardLayout acclassificationtype={ acclassificationtype } grandchildren={children}>
            <AcclassificationtypeMediumCardRelay acclassificationtype={ acclassificationtype } />
        </AcclassificationtypeLargeCardLayout>
    )
}

