// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcsubjectMediumCard } from './AcsubjectMediumCard';

const AcsubjectMediumCardRelayFragment = graphql`fragment AcsubjectMediumCardRelayFragment on AcsubjectGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcsubjectMediumCardRelay = ({ acsubject, children }) => {
    const acsubject_ = useFragment(AcsubjectMediumCardRelayFragment, acsubject);
    return (
        <AcsubjectMediumCard acsubject = { acsubject_ }>
            {children}
        </AcsubjectMediumCard>
    )
}

