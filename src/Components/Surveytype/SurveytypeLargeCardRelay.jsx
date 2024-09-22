// import {graphql} from 'graphql'
import { SurveytypeMediumCardRelay } from './UserMediumCardRelay';
import { SurveytypeLargeCardLayout } from './SurveytypeLargeCardLayout';

export const SurveytypeLargeCardRelay = ({ surveytype, children}) => {
    return (
        <SurveytypeLargeCardLayout surveytype={ surveytype } grandchildren={children}>
            <SurveytypeMediumCardRelay surveytype={ surveytype } />
        </SurveytypeLargeCardLayout>
    )
}

