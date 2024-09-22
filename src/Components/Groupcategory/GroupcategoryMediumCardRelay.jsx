// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { GroupcategoryMediumCard } from './GroupcategoryMediumCard';

const GroupcategoryMediumCardRelayFragment = graphql`fragment GroupcategoryMediumCardRelayFragment on GroupcategoryGQLModel {
    id
    created
    lastchange
    name
    nameen
}`

export const GroupcategoryMediumCardRelay = ({ groupcategory, children }) => {
    const groupcategory_ = useFragment(GroupcategoryMediumCardRelayFragment, groupcategory);
    return (
        <GroupcategoryMediumCard groupcategory = { groupcategory_ }>
            {children}
        </GroupcategoryMediumCard>
    )
}

