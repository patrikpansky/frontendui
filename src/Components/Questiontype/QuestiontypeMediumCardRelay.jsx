// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { QuestiontypeMediumCard } from './QuestiontypeMediumCard';

const QuestiontypeMediumCardRelayFragment = graphql`fragment QuestiontypeMediumCardRelayFragment on QuestiontypeGQLModel {
    id
    name
    lastchange
    created
}`

export const QuestiontypeMediumCardRelay = ({ questiontype, children }) => {
    const questiontype_ = useFragment(QuestiontypeMediumCardRelayFragment, questiontype);
    return (
        <QuestiontypeMediumCard questiontype = { questiontype_ }>
            {children}
        </QuestiontypeMediumCard>
    )
}

