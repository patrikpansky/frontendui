// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { StatementofworkMediumCard } from './StatementofworkMediumCard';

const StatementofworkMediumCardRelayFragment = graphql`fragment StatementofworkMediumCardRelayFragment on StatementofworkGQLModel {
    id
    lastchange
    startdate
    enddate
    created
    valid
}`

export const StatementofworkMediumCardRelay = ({ statementofwork, children }) => {
    const statementofwork_ = useFragment(StatementofworkMediumCardRelayFragment, statementofwork);
    return (
        <StatementofworkMediumCard statementofwork = { statementofwork_ }>
            {children}
        </StatementofworkMediumCard>
    )
}

