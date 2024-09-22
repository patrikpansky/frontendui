// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { GrouptypeMediumCard } from './GrouptypeMediumCard';

const GrouptypeMediumCardRelayFragment = graphql`fragment GrouptypeMediumCardRelayFragment on GrouptypeGQLModel {
    id
    created
    lastchange
    name
    nameen
}`

export const GrouptypeMediumCardRelay = ({ grouptype, children }) => {
    const grouptype_ = useFragment(GrouptypeMediumCardRelayFragment, grouptype);
    return (
        <GrouptypeMediumCard grouptype = { grouptype_ }>
            {children}
        </GrouptypeMediumCard>
    )
}

