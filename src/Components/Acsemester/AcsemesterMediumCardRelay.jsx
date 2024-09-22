// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcsemesterMediumCard } from './AcsemesterMediumCard';

const AcsemesterMediumCardRelayFragment = graphql`fragment AcsemesterMediumCardRelayFragment on AcsemesterGQLModel {
    id
    created
    lastchange
    order
}`

export const AcsemesterMediumCardRelay = ({ acsemester, children }) => {
    const acsemester_ = useFragment(AcsemesterMediumCardRelayFragment, acsemester);
    return (
        <AcsemesterMediumCard acsemester = { acsemester_ }>
            {children}
        </AcsemesterMediumCard>
    )
}

