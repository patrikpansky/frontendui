// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FinanceMediumCard } from './FinanceMediumCard';

const FinanceMediumCardRelayFragment = graphql`fragment FinanceMediumCardRelayFragment on FinanceGQLModel {
    id
    name
    amount
    lastchange
    created
    valid
}`

export const FinanceMediumCardRelay = ({ finance, children }) => {
    const finance_ = useFragment(FinanceMediumCardRelayFragment, finance);
    return (
        <FinanceMediumCard finance = { finance_ }>
            {children}
        </FinanceMediumCard>
    )
}

