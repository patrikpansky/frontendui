// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { AcprogramtitletypeMediumCard } from './AcprogramtitletypeMediumCard';

const AcprogramtitletypeMediumCardRelayFragment = graphql`fragment AcprogramtitletypeMediumCardRelayFragment on AcprogramtitletypeGQLModel {
    id
    name
    nameen
    created
    lastchange
}`

export const AcprogramtitletypeMediumCardRelay = ({ acprogramtitletype, children }) => {
    const acprogramtitletype_ = useFragment(AcprogramtitletypeMediumCardRelayFragment, acprogramtitletype);
    return (
        <AcprogramtitletypeMediumCard acprogramtitletype = { acprogramtitletype_ }>
            {children}
        </AcprogramtitletypeMediumCard>
    )
}

