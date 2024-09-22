// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcprogramMediumCard } from './AcprogramMediumCard';

const AcprogramMediumCardRelayFragment = graphql`fragment AcprogramMediumCardRelayFragment on AcprogramGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcprogramMediumCardRelay = ({ acprogram, children }) => {
    const acprogram_ = useFragment(AcprogramMediumCardRelayFragment, acprogram);
    return (
        <AcprogramMediumCard acprogram = { acprogram_ }>
            {children}
        </AcprogramMediumCard>
    )
}

