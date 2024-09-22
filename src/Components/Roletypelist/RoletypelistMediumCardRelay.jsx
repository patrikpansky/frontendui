// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { RoletypelistMediumCard } from './RoletypelistMediumCard';

const RoletypelistMediumCardRelayFragment = graphql`fragment RoletypelistMediumCardRelayFragment on RoletypelistGQLModel {
    id
    created
    lastchange
}`

export const RoletypelistMediumCardRelay = ({ roletypelist, children }) => {
    const roletypelist_ = useFragment(RoletypelistMediumCardRelayFragment, roletypelist);
    return (
        <RoletypelistMediumCard roletypelist = { roletypelist_ }>
            {children}
        </RoletypelistMediumCard>
    )
}

