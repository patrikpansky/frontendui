// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcclassificationlevelMediumCard } from './AcclassificationlevelMediumCard';

const AcclassificationlevelMediumCardRelayFragment = graphql`fragment AcclassificationlevelMediumCardRelayFragment on AcclassificationlevelGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcclassificationlevelMediumCardRelay = ({ acclassificationlevel, children }) => {
    const acclassificationlevel_ = useFragment(AcclassificationlevelMediumCardRelayFragment, acclassificationlevel);
    return (
        <AcclassificationlevelMediumCard acclassificationlevel = { acclassificationlevel_ }>
            {children}
        </AcclassificationlevelMediumCard>
    )
}

