// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcprogrammessageMediumCard } from './AcprogrammessageMediumCard';

const AcprogrammessageMediumCardRelayFragment = graphql`fragment AcprogrammessageMediumCardRelayFragment on AcprogrammessageGQLModel {
    id
    created
    lastchange
    name
    description
    date
}`

export const AcprogrammessageMediumCardRelay = ({ acprogrammessage, children }) => {
    const acprogrammessage_ = useFragment(AcprogrammessageMediumCardRelayFragment, acprogrammessage);
    return (
        <AcprogrammessageMediumCard acprogrammessage = { acprogrammessage_ }>
            {children}
        </AcprogrammessageMediumCard>
    )
}

