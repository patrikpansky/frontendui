// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { PresencetypeMediumCard } from './PresencetypeMediumCard';

const PresencetypeMediumCardRelayFragment = graphql`fragment PresencetypeMediumCardRelayFragment on PresencetypeGQLModel {
    id
    name
    nameen
    lastchange
    created
}`

export const PresencetypeMediumCardRelay = ({ presencetype, children }) => {
    const presencetype_ = useFragment(PresencetypeMediumCardRelayFragment, presencetype);
    return (
        <PresencetypeMediumCard presencetype = { presencetype_ }>
            {children}
        </PresencetypeMediumCard>
    )
}

