// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { QuestionvalueMediumCard } from './QuestionvalueMediumCard';

const QuestionvalueMediumCardRelayFragment = graphql`fragment QuestionvalueMediumCardRelayFragment on QuestionvalueGQLModel {
    id
    name
    lastchange
    created
    order
}`

export const QuestionvalueMediumCardRelay = ({ questionvalue, children }) => {
    const questionvalue_ = useFragment(QuestionvalueMediumCardRelayFragment, questionvalue);
    return (
        <QuestionvalueMediumCard questionvalue = { questionvalue_ }>
            {children}
        </QuestionvalueMediumCard>
    )
}

