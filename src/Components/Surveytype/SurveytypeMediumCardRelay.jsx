// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { SurveytypeMediumCard } from './SurveytypeMediumCard';

const SurveytypeMediumCardRelayFragment = graphql`fragment SurveytypeMediumCardRelayFragment on SurveytypeGQLModel {
    id
    name
    lastchange
    created
}`

export const SurveytypeMediumCardRelay = ({ surveytype, children }) => {
    const surveytype_ = useFragment(SurveytypeMediumCardRelayFragment, surveytype);
    return (
        <SurveytypeMediumCard surveytype = { surveytype_ }>
            {children}
        </SurveytypeMediumCard>
    )
}

