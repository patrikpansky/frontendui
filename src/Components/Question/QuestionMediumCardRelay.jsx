// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { QuestionMediumCard } from './QuestionMediumCard';

const QuestionMediumCardRelayFragment = graphql`fragment QuestionMediumCardRelayFragment on QuestionGQLModel {
    id
    name
    lastchange
    created
    order
}`

export const QuestionMediumCardRelay = ({ question, children }) => {
    const question_ = useFragment(QuestionMediumCardRelayFragment, question);
    return (
        <QuestionMediumCard question = { question_ }>
            {children}
        </QuestionMediumCard>
    )
}

