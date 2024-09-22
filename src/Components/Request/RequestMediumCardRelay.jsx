// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { RequestMediumCard } from './RequestMediumCard';

const RequestMediumCardRelayFragment = graphql`fragment RequestMediumCardRelayFragment on RequestGQLModel {
    id
    name
    lastchange
    created
    nameen
    gdpr
}`

export const RequestMediumCardRelay = ({ request, children }) => {
    const request_ = useFragment(RequestMediumCardRelayFragment, request);
    return (
        <RequestMediumCard request = { request_ }>
            {children}
        </RequestMediumCard>
    )
}

