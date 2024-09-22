// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcclassificationtypeMediumCard } from './AcclassificationtypeMediumCard';

const AcclassificationtypeMediumCardRelayFragment = graphql`fragment AcclassificationtypeMediumCardRelayFragment on AcclassificationtypeGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcclassificationtypeMediumCardRelay = ({ acclassificationtype, children }) => {
    const acclassificationtype_ = useFragment(AcclassificationtypeMediumCardRelayFragment, acclassificationtype);
    return (
        <AcclassificationtypeMediumCard acclassificationtype = { acclassificationtype_ }>
            {children}
        </AcclassificationtypeMediumCard>
    )
}

