// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcprogramtypeMediumCard } from './AcprogramtypeMediumCard';

const AcprogramtypeMediumCardRelayFragment = graphql`fragment AcprogramtypeMediumCardRelayFragment on AcprogramtypeGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcprogramtypeMediumCardRelay = ({ acprogramtype, children }) => {
    const acprogramtype_ = useFragment(AcprogramtypeMediumCardRelayFragment, acprogramtype);
    return (
        <AcprogramtypeMediumCard acprogramtype = { acprogramtype_ }>
            {children}
        </AcprogramtypeMediumCard>
    )
}

