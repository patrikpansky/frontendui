// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { infoMediumCard } from './infoMediumCard';

const infoMediumCardRelayFragment = graphql`fragment infoMediumCardRelayFragment on infoGQLModel {
    after
    before
    first
    last
    hasnextpage
}`

export const infoMediumCardRelay = ({ pageinfo, children }) => {
    const pageinfo_ = useFragment(infoMediumCardRelayFragment, pageinfo);
    return (
        <infoMediumCard pageinfo = { pageinfo_ }>
            {children}
        </infoMediumCard>
    )
}

