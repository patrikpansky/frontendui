// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FormsectionMediumCard } from './FormsectionMediumCard';

const FormsectionMediumCardRelayFragment = graphql`fragment FormsectionMediumCardRelayFragment on FormsectionGQLModel {
    id
    name
    lastchange
    created
    nameen
    order
}`

export const FormsectionMediumCardRelay = ({ formsection, children }) => {
    const formsection_ = useFragment(FormsectionMediumCardRelayFragment, formsection);
    return (
        <FormsectionMediumCard formsection = { formsection_ }>
            {children}
        </FormsectionMediumCard>
    )
}

