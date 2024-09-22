// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AclessontypeMediumCard } from './AclessontypeMediumCard';

const AclessontypeMediumCardRelayFragment = graphql`fragment AclessontypeMediumCardRelayFragment on AclessontypeGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AclessontypeMediumCardRelay = ({ aclessontype, children }) => {
    const aclessontype_ = useFragment(AclessontypeMediumCardRelayFragment, aclessontype);
    return (
        <AclessontypeMediumCard aclessontype = { aclessontype_ }>
            {children}
        </AclessontypeMediumCard>
    )
}

