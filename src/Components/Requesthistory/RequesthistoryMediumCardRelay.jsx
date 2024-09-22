// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { RequesthistoryMediumCard } from './RequesthistoryMediumCard';

const RequesthistoryMediumCardRelayFragment = graphql`fragment RequesthistoryMediumCardRelayFragment on RequesthistoryGQLModel {
    id
    name
    lastchange
    created
    nameen
}`

export const RequesthistoryMediumCardRelay = ({ requesthistory, children }) => {
    const requesthistory_ = useFragment(RequesthistoryMediumCardRelayFragment, requesthistory);
    return (
        <RequesthistoryMediumCard requesthistory = { requesthistory_ }>
            {children}
        </RequesthistoryMediumCard>
    )
}

