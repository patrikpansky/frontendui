// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcclassificationMediumCard } from './AcclassificationMediumCard';

const AcclassificationMediumCardRelayFragment = graphql`fragment AcclassificationMediumCardRelayFragment on AcclassificationGQLModel {
    id
    created
    lastchange
    date
    order
}`

export const AcclassificationMediumCardRelay = ({ acclassification, children }) => {
    const acclassification_ = useFragment(AcclassificationMediumCardRelayFragment, acclassification);
    return (
        <AcclassificationMediumCard acclassification = { acclassification_ }>
            {children}
        </AcclassificationMediumCard>
    )
}

