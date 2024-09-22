// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcprogramstudentstateMediumCard } from './AcprogramstudentstateMediumCard';

const AcprogramstudentstateMediumCardRelayFragment = graphql`fragment AcprogramstudentstateMediumCardRelayFragment on AcprogramstudentstateGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcprogramstudentstateMediumCardRelay = ({ acprogramstudentstate, children }) => {
    const acprogramstudentstate_ = useFragment(AcprogramstudentstateMediumCardRelayFragment, acprogramstudentstate);
    return (
        <AcprogramstudentstateMediumCard acprogramstudentstate = { acprogramstudentstate_ }>
            {children}
        </AcprogramstudentstateMediumCard>
    )
}

