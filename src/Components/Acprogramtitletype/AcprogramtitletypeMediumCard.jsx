import { AcprogramtitletypeCardCapsule } from './AcprogramtitletypeCardCapsule';
import { AcprogramtitletypeCardBody } from './AcprogramtitletypeCardBody';

export const AcprogramtitletypeMediumCardFragment = `
fragment AcprogramtitletypeMediumCardFragment on AcprogramtitletypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramtitletypeMediumCardConstant = ({ acprogramtitletype, children, label="" }) => {
    return (
        <AcprogramtitletypeCardCapsule acprogramtitletype={ acprogramtitletype } label={label} >
            <AcprogramtitletypeCardBody acprogramtitletype={ acprogramtitletype }>
                {children}
            </AcprogramtitletypeCardBody>
        </AcprogramtitletypeCardCapsule>        
    )
}
export let AcprogramtitletypeMediumCard = AcprogramtitletypeMediumCardConstant
export const setMediumCard = (newMediumCard) => AcprogramtitletypeMediumCard = newMediumCard