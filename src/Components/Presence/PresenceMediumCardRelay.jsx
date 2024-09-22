// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { PresenceMediumCard } from './PresenceMediumCard';

const PresenceMediumCardRelayFragment = graphql`fragment PresenceMediumCardRelayFragment on PresenceGQLModel {
    id
    lastchange
    created
}`

export const PresenceMediumCardRelay = ({ presence, children }) => {
    const presence_ = useFragment(PresenceMediumCardRelayFragment, presence);
    return (
        <PresenceMediumCard presence = { presence_ }>
            {children}
        </PresenceMediumCard>
    )
}

