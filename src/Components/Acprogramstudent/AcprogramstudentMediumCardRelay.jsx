// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcprogramstudentMediumCard } from './AcprogramstudentMediumCard';

const AcprogramstudentMediumCardRelayFragment = graphql`fragment AcprogramstudentMediumCardRelayFragment on AcprogramstudentGQLModel {
    id
    created
    lastchange
    semester
}`

export const AcprogramstudentMediumCardRelay = ({ acprogramstudent, children }) => {
    const acprogramstudent_ = useFragment(AcprogramstudentMediumCardRelayFragment, acprogramstudent);
    return (
        <AcprogramstudentMediumCard acprogramstudent = { acprogramstudent_ }>
            {children}
        </AcprogramstudentMediumCard>
    )
}

