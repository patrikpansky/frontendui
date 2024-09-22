// import {graphql} from 'graphql'
import { SurveyMediumCardRelay } from './UserMediumCardRelay';
import { SurveyLargeCardLayout } from './SurveyLargeCardLayout';

export const SurveyLargeCardRelay = ({ survey, children}) => {
    return (
        <SurveyLargeCardLayout survey={ survey } grandchildren={children}>
            <SurveyMediumCardRelay survey={ survey } />
        </SurveyLargeCardLayout>
    )
}

