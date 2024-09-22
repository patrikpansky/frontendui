// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { RoletypeMediumCard } from './RoletypeMediumCard';

const RoletypeMediumCardRelayFragment = graphql`fragment RoletypeMediumCardRelayFragment on RoletypeGQLModel {
    id
    created
    lastchange
    name
    nameen
}`

export const RoletypeMediumCardRelay = ({ roletype, children }) => {
    const roletype_ = useFragment(RoletypeMediumCardRelayFragment, roletype);
    return (
        <RoletypeMediumCard roletype = { roletype_ }>
            {children}
        </RoletypeMediumCard>
    )
}

