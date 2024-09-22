// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcprogramformtypeMediumCard } from './AcprogramformtypeMediumCard';

const AcprogramformtypeMediumCardRelayFragment = graphql`fragment AcprogramformtypeMediumCardRelayFragment on AcprogramformtypeGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcprogramformtypeMediumCardRelay = ({ acprogramformtype, children }) => {
    const acprogramformtype_ = useFragment(AcprogramformtypeMediumCardRelayFragment, acprogramformtype);
    return (
        <AcprogramformtypeMediumCard acprogramformtype = { acprogramformtype_ }>
            {children}
        </AcprogramformtypeMediumCard>
    )
}

