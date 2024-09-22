// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcprogramlanguagetypeMediumCard } from './AcprogramlanguagetypeMediumCard';

const AcprogramlanguagetypeMediumCardRelayFragment = graphql`fragment AcprogramlanguagetypeMediumCardRelayFragment on AcprogramlanguagetypeGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcprogramlanguagetypeMediumCardRelay = ({ acprogramlanguagetype, children }) => {
    const acprogramlanguagetype_ = useFragment(AcprogramlanguagetypeMediumCardRelayFragment, acprogramlanguagetype);
    return (
        <AcprogramlanguagetypeMediumCard acprogramlanguagetype = { acprogramlanguagetype_ }>
            {children}
        </AcprogramlanguagetypeMediumCard>
    )
}

