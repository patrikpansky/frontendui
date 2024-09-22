// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { SurveyMediumCard } from './SurveyMediumCard';

const SurveyMediumCardRelayFragment = graphql`fragment SurveyMediumCardRelayFragment on SurveyGQLModel {
    id
    name
    lastchange
    created
}`

export const SurveyMediumCardRelay = ({ survey, children }) => {
    const survey_ = useFragment(SurveyMediumCardRelayFragment, survey);
    return (
        <SurveyMediumCard survey = { survey_ }>
            {children}
        </SurveyMediumCard>
    )
}

