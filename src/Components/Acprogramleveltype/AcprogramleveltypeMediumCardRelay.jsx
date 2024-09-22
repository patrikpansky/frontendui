// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcprogramleveltypeMediumCard } from './AcprogramleveltypeMediumCard';

const AcprogramleveltypeMediumCardRelayFragment = graphql`fragment AcprogramleveltypeMediumCardRelayFragment on AcprogramleveltypeGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcprogramleveltypeMediumCardRelay = ({ acprogramleveltype, children }) => {
    const acprogramleveltype_ = useFragment(AcprogramleveltypeMediumCardRelayFragment, acprogramleveltype);
    return (
        <AcprogramleveltypeMediumCard acprogramleveltype = { acprogramleveltype_ }>
            {children}
        </AcprogramleveltypeMediumCard>
    )
}

