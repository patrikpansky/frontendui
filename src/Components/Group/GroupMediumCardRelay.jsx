// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { GroupMediumCard } from './GroupMediumCard';

const GroupMediumCardRelayFragment = graphql`fragment GroupMediumCardRelayFragment on GroupGQLModel {
    id
    created
    lastchange
    name
    nameen
    email
    abbreviation
    valid
    typeid
}`

export const GroupMediumCardRelay = ({ group, children }) => {
    const group_ = useFragment(GroupMediumCardRelayFragment, group);
    return (
        <GroupMediumCard group = { group_ }>
            {children}
        </GroupMediumCard>
    )
}

