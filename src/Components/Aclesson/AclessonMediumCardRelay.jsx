// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AclessonMediumCard } from './AclessonMediumCard';

const AclessonMediumCardRelayFragment = graphql`fragment AclessonMediumCardRelayFragment on AclessonGQLModel {
    id
    name
    nameen
    created
    lastchange
    count
}`

export const AclessonMediumCardRelay = ({ aclesson, children }) => {
    const aclesson_ = useFragment(AclessonMediumCardRelayFragment, aclesson);
    return (
        <AclessonMediumCard aclesson = { aclesson_ }>
            {children}
        </AclessonMediumCard>
    )
}

