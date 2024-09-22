// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AnswerMediumCard } from './AnswerMediumCard';

const AnswerMediumCardRelayFragment = graphql`fragment AnswerMediumCardRelayFragment on AnswerGQLModel {
    id
    lastchange
    created
    value
    aswered
    expired
}`

export const AnswerMediumCardRelay = ({ answer, children }) => {
    const answer_ = useFragment(AnswerMediumCardRelayFragment, answer);
    return (
        <AnswerMediumCard answer = { answer_ }>
            {children}
        </AnswerMediumCard>
    )
}

