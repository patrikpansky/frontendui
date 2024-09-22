// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FinancetypeMediumCard } from './FinancetypeMediumCard';

const FinancetypeMediumCardRelayFragment = graphql`fragment FinancetypeMediumCardRelayFragment on FinancetypeGQLModel {
    id
    name
    nameen
    lastchange
    created
    valid
}`

export const FinancetypeMediumCardRelay = ({ financetype, children }) => {
    const financetype_ = useFragment(FinancetypeMediumCardRelayFragment, financetype);
    return (
        <FinancetypeMediumCard financetype = { financetype_ }>
            {children}
        </FinancetypeMediumCard>
    )
}

